const pf = document.getElementById('pf');
const ctx = pf.getContext("2d");

function byAttribute(parent, field, value){
    return parent.find((element)=>element[field] == value);
}

function to_xyo(pivot, node){

    function deg(degrees){
        return degrees * (Math.PI/180);
    }

    let nodeX = pivot.x + node.r * Math.cos(deg(node.theta));
    let nodeY = pivot.y - node.r * Math.sin(deg(node.theta));
    let nodeO = pivot.o + node.o;

    return {
        "x" : nodeX,
        "y" : nodeY,
        "o" : nodeO
    }

}

function BuildDiagonalPath(path, node0, node1, offset, reverse, radius = 5){


    let y_dif = node1.y - node0.y;
    let x_dif = node1.x - node0.x;

    if(reverse){
        offset = Math.abs(Math.abs(y_dif)-Math.abs(x_dif)) - offset;
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

    let segment = new Path2D()
    segment.moveTo(node0.x, node0.y);
    segment.arcTo(node0.x, node0.y, nodei0.x, nodei0.y, radius);
    segment.arcTo(nodei0.x, nodei0.y, nodei1.x, nodei1.y, radius);
    segment.arcTo(nodei1.x, nodei1.y, node1.x, node1.y, radius);
    segment.lineTo(node1.x,node1.y);

    path.arcTo(node0.x, node0.y, nodei0.x, nodei0.y, radius);
    path.arcTo(nodei0.x, nodei0.y, nodei1.x, nodei1.y, radius);
    path.arcTo(nodei1.x, nodei1.y, node1.x, node1.y, radius);
    path.lineTo(node1.x,node1.y);

    return segment;


}

function BuildDirectPath(path, node0, node1){

    let segment = new Path2D();

    segment.moveTo(node0.x, node0.y);
    segment.lineTo(node1.x, node1.y);

    path.lineTo(node1.x, node1.y);

    return segment;
}

function GetRoundrectPath(node, width, height, radius){

    function deg(degrees){
        return degrees * (Math.PI/180);
    }

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

    let path = new Path2D();

    path.moveTo(node0.x - unit1.x, node0.y - unit1.y);
    path.arcTo(node0.x, node0.y, node1.x, node1.y, radius);
    path.arcTo(node1.x, node1.y, node2.x, node2.y, radius);
    path.arcTo(node2.x, node2.y, node3.x, node3.y, radius);
    path.arcTo(node3.x, node3.y, node0.x, node0.y, radius);
    path.arcTo(node0.x, node0.y, node1.x, node1.y, radius);

    return path;

}

function DrawStationOnNode(config, node){

    for(let subconstruct of config.construct){

        if(subconstruct.geometry == "roundrect"){

            let stationPath = GetRoundrectPath(node, subconstruct.width, subconstruct.height, subconstruct.radius);
            ctx.strokeStyle = subconstruct.strokeStyle;
            ctx.fillStyle = subconstruct.fillStyle;
            ctx.lineWidth = subconstruct.lineWidth;

            ctx.beginPath();
            ctx.stroke(stationPath);
            ctx.fill(stationPath);

        }
    }

}

function process_rnode(station,rnode){

    if(!('r' in rnode)){
        return {
            x: station.pivot.x + rnode.x,
            y: station.pivot.y + rnode.y,
            o: station.pivot.o + rnode.o
        }
    }else{
        return to_xyo(station.pivot, rnode);
    }

}

function get_rnode(data, sta_id, index){

    const station = byAttribute(data.stations, 'id', sta_id);
    console.log(station);
    const rnode = station.rnodes[index];
    console.log(rnode);
    console.log(process_rnode(station, rnode))

    return process_rnode(station, rnode);
}

function construct_map(data){

    ctx.clearRect(0,0,2000,2000);

    for(let line of data.lines){

        let branchPathArray = [];
        let branchIndex = 0;

        // Constructing the Path2D of all branches in a line
        for(let branch of line.paths){

            let branchPath = new Path2D();
            
            console.log(data);
            const init_position = get_rnode(data, branch[0].station_id, branch[0].index);
            branchPath.moveTo(init_position.x, init_position.y);

            for(let i = 0; i < branch.length - 1; i++){

                let rnode0 = get_rnode(data, branch[i].station_id, branch[i].index);
                let rnode1 = get_rnode(data, branch[i+1].station_id, branch[i+1].index);

                // console.log(rnode0);

                if(branch[i].linkage == "direct"){
                    BuildDirectPath(branchPath, rnode0, rnode1);
                }else 
                if(branch[i].linkage == "diagonal"){
                    BuildDiagonalPath(branchPath, rnode0, rnode1, branch[i].linkage_prop.offset, branch[i].linkage_prop.reverse)
                }

            }
            branchPathArray.push(branchPath);
        }

        // Drawing the branches in canvas
        for(let subconstruct of line.construct){

            ctx.strokeStyle = subconstruct.strokeStyle;
            ctx.lineWidth = subconstruct.lineWidth;
            console.log(branchPathArray);    
            for(let branchPath of branchPathArray){ ctx.stroke(branchPath) };
        

        }

    }

    for(let station of data.stations){

        for(let feature of station.features){

            let config = data.station_styles[feature.use_id];
            let node = process_rnode(station, station.rnodes[feature.target])

            if(feature.type == "station"){
                DrawStationOnNode(config, node);
            }
        }

    }

}

export {construct_map};