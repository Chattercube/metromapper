

const pf = document.getElementById('pf');
const ctx = pf.getContext("2d");

function get_station_from_dp(data,datapoint){
    return data.stations.find((element)=>element.id == datapoint.station_id);
}

function get_node(data,datapoint){

    let station = get_station_from_dp(data,datapoint);
    let node = station.rnodes[datapoint.index];

    if(!("r" in node)){
    let pivot = station.pivot;
    let nodeX = pivot.x + node.x;
    let nodeY = pivot.y + node.y;
    let nodeO = pivot.o + node.o;
    return {
        "x" : nodeX,
        "y" : nodeY,
        "o" : nodeO
    }
    }else{
        let pivot = station.pivot;
        let node = station.rnodes[datapoint.index];

        let nodeX = pivot.x + node.r * Math.cos(deg(node.theta));
        let nodeY = pivot.y - node.r * Math.sin(deg(node.theta));
        let nodeO = pivot.o + node.o;

        // console.log(nodeX.toString() + " " + nodeY.toString());
        return {
            "x" : nodeX,
            "y" : nodeY,
            "o" : nodeO
        }


    }
}

function deg(degrees){
    return degrees * (Math.PI/180);
}

function draw_segment(node0, node1, mode, ptr = null){

    if(mode == "direct"){
        ctx.lineTo(node1.x, node1.y);
    }else
    if(mode == "diagonal"){

        let offset = ptr.offset;

        let y_dif = node1.y - node0.y;
        let x_dif = node1.x - node0.x;
        if('reverse' in ptr){
            if(ptr.reverse){
                offset = Math.abs(Math.abs(y_dif)-Math.abs(x_dif)) - offset;
            }
        }

        let y_shorter = (Math.abs(y_dif) <= Math.abs(x_dif));

        if(y_shorter){
            var unit0 = {"x":0,"y":(y_dif>0) ? 1 : -1};
            var unit1 = {"x":(x_dif>0) ? 1 : -1,"y":0};
        }else{
            var unit1 = {"x":0,"y":(y_dif>0) ? 1 : -1};
            var unit0 = {"x":(x_dif>0) ? 1 : -1,"y":0};
        }


        if(offset>0){
            var nodei0 = {
                "x" : node0.x + unit1.x * Math.abs(offset),
                "y" : node0.y + unit1.y * Math.abs(offset)
            }
        }else{
            var nodei0 = {
                "x" : node0.x + unit0.x * Math.abs(offset),
                "y" : node0.y + unit0.y * Math.abs(offset)
            }
        }

        let r_offset = Math.abs(Math.abs(y_dif)-Math.abs(x_dif)) - offset;

        


        if(r_offset>0){
            var nodei1 = {
                "x" : node1.x - unit1.x * Math.abs(r_offset),
                "y" : node1.y - unit1.y * Math.abs(r_offset)
            }
        }else{
            var nodei1 = {
                "x" : node1.x - unit0.x * Math.abs(r_offset),
                "y" : node1.y - unit0.y * Math.abs(r_offset)
            }
        }

        ctx.arcTo(node0.x, node0.y, nodei0.x, nodei0.y, 5);
        ctx.arcTo(nodei0.x, nodei0.y, nodei1.x, nodei1.y, 5);
        ctx.arcTo(nodei1.x, nodei1.y, node1.x, node1.y, 5);
        ctx.lineTo(node1.x,node1.y)
    }
    


}

function draw_station(node, mode = null, ptr = null){

    if(mode == "roundrect"){
    let width = ptr.width;
    let height = ptr.height;
    let radius = ptr.radius;

    let unit0 = {"x" : width * Math.sin(deg(node.o)), "y": width * Math.cos(deg(node.o))}
    let unit1 = {"x" : -1 * height * Math.cos(deg(node.o)), "y": height * Math.sin(deg(node.o))}

    let node0 = {
        "x" : node.x + unit0.x + unit1.x,
        "y" : node.y + unit0.y + unit1.y
    };
    let node1 = {
        "x" : node.x - unit0.x + unit1.x,
        "y" : node.y - unit0.y + unit1.y
    };
    let node2 = {
        "x" : node.x - unit0.x - unit1.x,
        "y" : node.y - unit0.y - unit1.y
    };
    let node3 = {
        "x" : node.x + unit0.x - unit1.x,
        "y" : node.y + unit0.y - unit1.y
    };
    ctx.beginPath();
    ctx.moveTo(node0.x - unit1.x, node0.y - unit1.y);
    ctx.arcTo(node0.x, node0.y, node1.x, node1.y, radius);
    ctx.arcTo(node1.x, node1.y, node2.x, node2.y, radius);
    ctx.arcTo(node2.x, node2.y, node3.x, node3.y, radius);
    ctx.arcTo(node3.x, node3.y, node0.x, node0.y, radius);
    ctx.arcTo(node0.x, node0.y, node1.x, node1.y, radius);
    ctx.stroke();
    ctx.fill();
}

}

function construct_map(data){

    ctx.clearRect(0,0,pf.width, pf.height);

    for (let line of data.lines){
        for(let cst of line.construct){
            for(let path of line.paths){

                ctx.strokeStyle = cst.strokeStyle;
                ctx.lineWidth = cst.lineWidth;
                ctx.beginPath();

                let init_position = get_node(data,path[0]);
                ctx.moveTo(init_position.x, init_position.y);

                for(let i = 0; i < path.length - 1; i++){
                    let dp0 = get_node(data,path[i]);
                    let dp1 = get_node(data,path[i+1]);
                    draw_segment(dp0, dp1, path[i].linkage, path[i].linkage_prop);
                }
                ctx.stroke();
            }
        }
    }

    for (let station of data.stations){
        for(let feature of station.features){
            if(feature.type == "station"){

                let style = data.station_styles[feature.use_id];
                let node = get_node(data,{"station_id": station.id, "index": feature.target});

                if(style.geometry == "roundrect"){
                    for(let cst of style.construct){

                        ctx.strokeStyle = cst.strokeStyle;
                        ctx.fillStyle = cst.fillStyle;
                        ctx.lineWidth = cst.lineWidth
                        ctx.beginPath();

                        draw_station(node, style.geometry, cst);
                    }
                }
            }
        }
    }


}

export {construct_map};