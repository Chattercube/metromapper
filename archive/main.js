const pf = document.getElementById('pf');
const ctx = pf.getContext("2d");

const dataJSON = `
{

    "station_styles":{
        "ss0":{
            "id" : "ss0", "name" : "Circle Station",

            "geometry": "roundrect",
            "construct":[
                {
                    "strokeStyle": "#000000",
                    "fillStyle": "#ffffff",
                    "lineWidth" : 20,

                    "height": 40,
                    "width": 20,
                    "radius": 20
                },
                {
                    "strokeStyle": "#000000",
                    "fillStyle": "#ffffff",
                    "lineWidth" : 5,

                    "height": 20,
                    "width": 10,
                    "radius": 10
                }
            ]

        },
        "ss1":{
            "id" : "ss1", "name" : "Interchange",

            "geometry": "circle",
            "construct":[
                {
                    "strokeStyle": "#000000",
                    "lineWidth" : 1,

                    "fillStyle": "#999999",
                    "radius": 10
                }

            ]

        }
    },

    "stations":[
        {

            "id":"sta0",
            "name":"Reynolds",
            
            "pivot":{ "x" : 100 , "y" : 100, "o": 0},
            "rnodes":[
                { "x" : 0 , "y" : 0, "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        },
        {

            "id":"sta1",
            "name":"Brandon",
            
            "pivot":{ "x" : 100 , "y" : 400, "o": 0},
            "rnodes":[
                { "x" : 0 , "y" : 0 , "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        },
        {

            "id":"sta2",
            "name":"Manley",
            
            "pivot":{ "x" : 100 , "y" : 700, "o": 0},

            "rnodes":[
                { "x" : 0 , "y" : 0 , "o": 0},
                { "x" : 0, "y" : 50 , "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                },
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 1
                }
            ]

        },
        {

            "id":"sta3",
            "name":"Brandon",
            
            "pivot":{ "x" : 400 , "y" : 100, "o": 0},
            "rnodes":[
                { "x" : 0 , "y" : 0 , "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        },{

            "id":"sta4",
            "name":"Brandon",
            
            "pivot":{ "x" : 400 , "y" : 400, "o": 0},
            "rnodes":[
                { "x" : 0 , "y" : 0 , "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        },{

            "id":"sta5",
            "name":"Brandon",
            
            "pivot":{ "x" : 400 , "y" : 700, "o": 0},
            "rnodes":[
                { "x" : 0 , "y" : 0 , "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        },{

            "id":"sta6",
            "name":"Brandon",
            
            "pivot":{ "x" : 700 , "y" : 100, "o": 0},
            "rnodes":[
                { "x" : 0 , "y" : 0 , "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        },{

            "id":"sta7",
            "name":"Brandon",
            
            "pivot":{ "x" : 700 , "y" : 400, "o": 0},
            "rnodes":[
                { "x" : 0 , "y" : 0 , "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        },{

            "id":"sta8",
            "name":"Brandon",
            
            "pivot":{ "x" : 700 , "y" : 700, "o": 0},
            "rnodes":[
                { "x" : 0 , "y" : 0 , "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        }

    ],

    "lines":[
        {
            "id": "ls0", "name": "Red Line",

            "construct":[
                {"strokeStyle": "#000000", "lineWidth": 12},
                {"strokeStyle": "#ff0000", "lineWidth": 13}
            ],

            "paths":[
                [
                    {
                        "station_id" : "sta0",
                        "index" : 0,
                        "linkage": "diagonal",
                        "linkage_prop":{
                            "offset" : 200
                        }
                    },
                    {
                        "station_id" : "sta4",
                        "index" : 0,
                        "linkage": "diagonal",
                        "linkage_prop":{
                            "offset" : 200
                        }
                    },{
                        "station_id" : "sta5",
                        "index" : 0,
                        "linkage": "diagonal",
                        "linkage_prop":{
                            "offset" : 200
                        }
                    },{
                        "station_id" : "sta2",
                        "index" : 0,
                        "linkage": "diagonal",
                        "linkage_prop":{
                            "offset" : 200
                        }
                    },{
                        "station_id" : "sta1",
                        "index" : 0,
                        "linkage": "diagonal",
                        "linkage_prop":{
                            "offset" : -100
                        }
                    },{
                        "station_id" : "sta3",
                        "index" : 0,
                        "linkage": "diagonal",
                        "linkage_prop":{
                            "offset" : 100
                        }
                    },{
                        "station_id" : "sta7",
                        "index" : 0,
                        "linkage": "diagonal",
                        "linkage_prop":{
                            "offset" : 10
                        }
                    },{
                        "station_id" : "sta8",
                        "index" : 0,
                        "linkage": "diagonal",
                        "linkage_prop":{
                            "offset" : 200
                        }
                    }
                ],
                [
                    {
                        "station_id" : "sta0",
                        "index" : 0,
                        "linkage": "direct"
                    },
                    {
                        "station_id" : "sta1",
                        "index" : 0,
                        "linkage": "direct"
                    }
                ]
            ]
        
        }
    ]
}`

const dataJSON2 = `{

    "station_styles":{
        "ss0":{
            "id" : "ss0", "name" : "Circle Station",

            "geometry": "roundrect",
            "construct":[
                {
                    "strokeStyle": "#000000",
                    "fillStyle": "#ffffff",
                    "lineWidth" : 2,

                    "height": 4,
                    "width": 4,
                    "radius": 4
                }
            ]

        },
        "ss1":{
            "id" : "ss1", "name" : "Interchange",

            "geometry": "roundrect",
            "construct":[
                {
                    "strokeStyle": "#ffffff",
                    "fillStyle": "#000000",
                    "lineWidth" : 2,

                    "height": 4,
                    "width": 4,
                    "radius": 4
                }
            ]

        }
    },

    "stations":[
        {

            "id":"sta0",
            "name":"Tsuen Wan",
            
            "pivot":{ "x" : 100 , "y" : 100, "o": 0},
            "rnodes":[
                { "x" : 0 , "y" : 0, "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        },{

            "id":"sta1",
            "name":"Tai Wo Hau",
            
            "pivot":{ "x" : 200 , "y" : 100, "o": 0},
            "rnodes":[
                { "x" : 0 , "y" : 0, "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        },{

            "id":"sta2",
            "name":"Kwai Hing",
            
            "pivot":{ "x" : 300 , "y" : 100, "o": 0},
            "rnodes":[
                { "x" : 0 , "y" : 0, "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        },{

            "id":"sta3",
            "name":"Kwai Fong",
            
            "pivot":{ "x" : 400 , "y" : 100, "o": 0},
            "rnodes":[
                { "x" : 0 , "y" : 0, "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        },{

            "id":"sta4",
            "name":"Lai King",
            
            "pivot":{ "x" : 500 , "y" : 105, "o": 0},
            "rnodes":[
                { "x" : 0 , "y" : -5, "o": 0},
                { "x" : 0 , "y" : 5, "o": 0},
                { "x" : 0 , "y" : 15, "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                },
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 1
                }
            ]

        },{

            "id":"sta5",
            "name":"Mei Foo",
            
            "pivot":{ "x" : 500 , "y" : 100, "o": 0},
            "rnodes":[
                { "x" : 0 , "y" : 0, "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        },{

            "id":"sta6",
            "name":"Tsing Yi",
            
            "pivot":{ "x" : 380 , "y" : 150, "o": 135},
            "rnodes":[
                { "r" : -5, "theta": 135, "o": 0},
                { "r" : 5, "theta": 135, "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                },{
                    "type": "station",
                    "use_id": "ss0",
                    "target": 1
                }
            ]

        },{

            "id":"sta6_0",
            "name":"TY_SB",
            
            "pivot":{ "x" : 330 , "y" : 200, "o": 135},
            "rnodes":[
                { "r" : 0, "theta": 135, "o": 0}
            ],

            "features":[
            ]

        },{

            "id":"sta7",
            "name":"Sunny Bay",
            
            "pivot":{ "x" : 280 , "y" : 250, "o": 135},
            "rnodes":[
                { "r" : -5, "theta": 135, "o": 0},
                { "r" : 5, "theta": 135, "o": 0},
                { "r" : 15, "theta": 135, "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                },{
                    "type": "station",
                    "use_id": "ss0",
                    "target": 1
                }
            ]

        },{

            "id":"sta8",
            "name":"Tung Chung",
            
            "pivot":{ "x" : 180 , "y" : 350, "o": 135},
            "rnodes":[
                { "r" : 5, "theta": 135, "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        },{

            "id":"sta8_0",
            "name":"SB_AP",
            
            "pivot":{ "x" : 200 , "y" : 270, "o": 135},
            "rnodes":[
                { "r" : -5, "theta": 135, "o": 0}
            ],

            "features":[
            ]

        },{

            "id":"sta8a",
            "name":"Airport",
            
            "pivot":{ "x" : 150 , "y" : 240, "o": 270},
            "rnodes":[
                { "r" : -5, "theta": 135, "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        },{

            "id":"sta8b",
            "name":"AsiaWorld-Expo",
            
            "pivot":{ "x" : 230 , "y" : 200, "o": 0},
            "rnodes":[
                { "r" : -5, "theta": 135, "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        },{

            "id":"sta7a",
            "name":"Disneyland",
            
            "pivot":{ "x" : 400 , "y" : 300, "o": 0},
            "rnodes":[
                { "r" : -5, "theta": 135, "o": 0}
            ],

            "features":[
                {
                    "type": "station",
                    "use_id": "ss0",
                    "target": 0
                }
            ]

        }

    ],

    "lines":[
        {

            "id": "tun", "name": "Tung Chung Line",

            "construct":[
                {"strokeStyle": "#000000", "lineWidth": 10},
                {"strokeStyle": "#d3803eff", "lineWidth": 8}
            ],

            "paths":[[
                {
                    "station_id" : "sta4",
                    "index" : 1,
                    "linkage": "diagonal",
                    "linkage_prop":{
                        "offset": 0,
                        "reverse": true
                    }
                },{
                    "station_id" : "sta6",
                    "index" : 1,
                    "linkage": "direct"
                }
                ,{
                    "station_id" : "sta7",
                    "index" : 1,
                    "linkage": "direct"
                },{
                    "station_id" : "sta8",
                    "index" : 0,
                    "linkage": "direct"
                }

                ]]
        
        },{

            "id": "drl", "name": "Disneyland Resort Line",

            "construct":[
                {"strokeStyle": "#000000", "lineWidth": 10},
                {"strokeStyle": "#c1507fff", "lineWidth": 8}
            ],

            "paths":[[
                {
                    "station_id" : "sta7",
                    "index" : 0,
                    "linkage": "diagonal",
                    "linkage_prop":{
                        "offset": 0
                    }
                },{
                    "station_id" : "sta7a",
                    "index" : 0,
                    "linkage": "diagonal",
                    "linkage_prop":{
                        "offset": 0
                    }
                }

                ]]
        
        },{

            "id": "ape", "name": "Airport Express",

            "construct":[
                {"strokeStyle": "#000000", "lineWidth": 10},
                {"strokeStyle": "#0b4b5dff", "lineWidth": 8}
            ],

            "paths":[[
                {
                    "station_id" : "sta4",
                    "index" : 2,
                    "linkage": "diagonal",
                    "linkage_prop":{
                        "offset": 0,
                        "reverse": true
                    }
                },{
                    "station_id" : "sta6",
                    "index" : 0,
                    "linkage": "diagonal",
                    "linkage_prop":{
                        "offset": 0
                    }
                }
                ,{
                    "station_id" : "sta6_0",
                    "index" : 0,
                    "linkage": "diagonal",
                    "linkage_prop":{
                        "offset": 0,
                        "reverse": true
                    }
                },{
                    "station_id" : "sta7",
                    "index" : 2,
                    "linkage": "diagonal",
                    "linkage_prop":{
                        "offset": 0
                    }
                },{
                    "station_id" : "sta8_0",
                    "index" : 0,
                    "linkage": "diagonal",
                    "linkage_prop":{
                        "offset": 35
                    }
                },{
                    "station_id" : "sta8a",
                    "index" : 0,
                    "linkage": "diagonal",
                    "linkage_prop":{
                        "offset": -20
                    }
                },{
                    "station_id" : "sta8b",
                    "index" : 0,
                    "linkage": "diagonal",
                    "linkage_prop":{
                        "offset": 50
                    }
                }

                ]]
        
        }
    ]
}`

function pDistance(x, y, x1, y1, x2, y2) {

    var A = x - x1;
    var B = y - y1;
    var C = x2 - x1;
    var D = y2 - y1;
  
    var dot = A * C + B * D;
    var len_sq = C * C + D * D;
    var param = -1;
    if (len_sq != 0) //in case of 0 length line
        param = dot / len_sq;
  
    var xx, yy;
  
    if (param < 0) {
      xx = x1;
      yy = y1;
    }
    else if (param > 1) {
      xx = x2;
      yy = y2;
    }
    else {
      xx = x1 + param * C;
      yy = y1 + param * D;
    }
  
    var dx = x - xx;
    var dy = y - yy;
    return Math.sqrt(dx * dx + dy * dy);
}


const data = JSON.parse(dataJSON2);

function get_station_from_dp(datapoint){
    // console.log(datapoint);
    return data.stations.find((element)=>element.id == datapoint.station_id);
}

function get_station_from_id(id){
    // console.log(datapoint);
    return data.stations.find((element)=>element.id == id);
}

function get_node(datapoint){

    // console.log(datapoint);
    let station = get_station_from_dp(datapoint);
    let node = station.rnodes[datapoint.index];

    // console.log(datapoint.index);
    // console.log(station.rnodes);
    // console.log(node);
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

function deg(degrees){
    return degrees * (Math.PI/180);
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

    for (line of data.lines){
        for(cst of line.construct){
            for(path of line.paths){

                ctx.strokeStyle = cst.strokeStyle;
                ctx.lineWidth = cst.lineWidth;
                ctx.beginPath();

                let init_position = get_node(path[0]);
                ctx.moveTo(init_position.x, init_position.y);

                for(i = 0; i < path.length - 1; i++){
                    let dp0 = get_node(path[i]);
                    let dp1 = get_node(path[i+1]);
                    draw_segment(dp0, dp1, path[i].linkage, path[i].linkage_prop);
                }
                ctx.stroke();
            }
        }
    }

    for (station of data.stations){
        for(feature of station.features){
            if(feature.type == "station"){

                let style = data.station_styles[feature.use_id];
                let node = get_node({"station_id": station.id, "index": feature.target});

                if(style.geometry == "roundrect"){
                    for(cst of style.construct){

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

function display_items(){
    
    let element_list_ui = document.querySelector("#element_select");
    // console.log(element_list_ui);
    element_list_ui.innerHTML = ''; // clear all items

    for(station of data.stations){
        let list_item = document.createElement("option");
        list_item.innerHTML = station.name + " (" + station.id + ")";
        list_item.value = station.id;

        element_list_ui.appendChild(list_item)
    }
}

function display_rnodes(station, window){

    let i = 0;
    console.log(window);

    window.innerHTML = '';

    for(rnode of station.rnodes){
        let list_item = document.createElement("option");
        if('r' in rnode){
        list_item.innerHTML = `[${i}] r: ${rnode.r}, theta: ${rnode.theta}, o: ${rnode.o}`;
        }else{
        list_item.innerHTML = `[${i}] x: ${rnode.x}, y: ${rnode.y}, o: ${rnode.o}`;
        }
        list_item.setAttribute("value",i);
        window.appendChild(list_item);

        i++
    }

    construct_map(data);

    
}

function display_features(station, window){

    let i = 0;
    console.log(window);

    window.innerHTML = '';

    for(feature of station.features){
        let list_item = document.createElement("option");

        if(feature.type == "station"){

            let station_feature_id = feature.use_id;
            let station_feature = data.station_styles[station_feature_id];

            list_item.innerHTML = `[${feature.target}] ${station_feature.name}`
            list_item.setAttribute("value",i);

            i++;
       
        }

        window.appendChild(list_item);
    }

    construct_map(data);

    
}

function display_all_styles(window){

    window.inner = '';

    let station_optgroup = document.createElement("optgroup");
    station_optgroup.label = "Stations"

    for(key in data.station_styles){

        
        
        let station_style = data.station_styles[key];
        let subgroup_item = document.createElement("option");
        if(key == 0){subgroup_item.setAttribute("selected")};
        subgroup_item.innerHTML = `${station_style.name} (${station_style.id})`;
        subgroup_item.setAttribute("value",key);

        station_optgroup.append(subgroup_item);
        

    }
    window.appendChild(station_optgroup);

}

function display_lines(){


    let line_select = document.querySelector("#line_select");
    let branch_select = document.querySelector("#branch_select");

    line_select.innerHTML = '';
    let i = 0
    for(line of data.lines){

        let list_item = document.createElement("option");
        list_item.innerHTML = line.name;
        list_item.value = i;
        line_select.appendChild(list_item);
        i++
    };

    
    line_select.addEventListener("change", () => {

        branch_select.innerHTML = '';
        let selected_line = data.lines[line_select.value];

        let i = 0;
        for(branch of selected_line.paths){

            let optgroup_item = document.createElement("optgroup");
            optgroup_item.label = i;
            branch_select.appendChild(optgroup_item);

            let j = 0;
            for(pathnode of branch){
                let list_item = document.createElement("option");
                let station = get_station_from_id(pathnode.station_id);
                list_item.innerHTML = `${station.name}: rnode${pathnode.index}`;
                list_item.value = `${line_select.value},${i},${j}`;
                optgroup_item.appendChild(list_item);
                j++;

            }
            i++;
        }
        
    })



}

display_lines();

function update_station_attribute(field, attr, value){
    console.log(typeof value);
    console.log(value);
    field[attr] = value;
    display_items();
    construct_map(data);
}

function update_line_attribute(field, attr, value){
    console.log(typeof value);
    console.log(value);
    field[attr] = value;
    display_lines();
    construct_map(data);
}

function update_rnodes(field, attr, value, station, window){
    console.log(station);
    console.log(typeof value);
    console.log(value);
    field[attr] = value;
    display_items();
    display_rnodes(station, window);
    construct_map(data);
}




const prop_ui = document.querySelector("#prop_select");
const table = prop_ui.children[0];
const tbody = table.children[1];

const line_prop_ui = document.querySelector("#prop_line");
const line_table = line_prop_ui.children[0];
const line_tbody = line_table.children[1];


function add_simple_entry(station, entry_name, field){

    let entry_item = document.createElement("tr");
    let entry_title = document.createElement("td");
    entry_title.innerHTML = entry_name;
    let entry_input_frame = document.createElement("td");
    let entry_input = document.createElement("input");
    entry_input.value = station[field];
    entry_input.addEventListener("change", () => update_line_attribute(station, field, entry_input.value));

    tbody.appendChild(entry_item);
    entry_item.appendChild(entry_title);
    entry_item.appendChild(entry_input_frame);
    entry_input_frame.appendChild(entry_input);

}

function add_simple_line_entry(station, entry_name, field){

    let entry_item = document.createElement("tr");
    let entry_title = document.createElement("td");
    entry_title.innerHTML = entry_name;
    let entry_input_frame = document.createElement("td");
    let entry_input = document.createElement("input");
    entry_input.value = station[field];
    entry_input.addEventListener("change", () => update_station_attribute(station, field, entry_input.value));

    line_tbody.appendChild(entry_item);
    entry_item.appendChild(entry_title);
    entry_item.appendChild(entry_input_frame);
    entry_input_frame.appendChild(entry_input);

}

function add_pivot_entry(station){

    console.log(station);
    let entry_item = document.createElement("tr");
    let entry_title = document.createElement("td");
    entry_title.innerHTML = "Pivot";
    let entry_input_frame = document.createElement("td");
    let entry_input_x = document.createElement("input");
    let entry_input_y = document.createElement("input");
    let entry_input_o = document.createElement("input");
    entry_input_x.value = station.pivot.x.toString();
    entry_input_y.value = station.pivot.y.toString();
    entry_input_o.value = station.pivot.o.toString();
    entry_input_x.setAttribute("style", "width: 25%");
    entry_input_y.setAttribute("style", "width: 25%");
    entry_input_o.setAttribute("style", "width: 25%");
    entry_input_x.setAttribute("type", "number");
    entry_input_y.setAttribute("type", "number");
    entry_input_o.setAttribute("type", "number");
    entry_input_x.addEventListener("change", () => update_station_attribute(station.pivot, 'x', parseFloat(entry_input_x.value)));
    entry_input_y.addEventListener("change", () => update_station_attribute(station.pivot, 'y', parseFloat(entry_input_y.value)));
    entry_input_o.addEventListener("change", () => update_station_attribute(station.pivot, 'o', parseFloat(entry_input_o.value)));


    tbody.appendChild(entry_item);
    entry_item.appendChild(entry_title);
    entry_item.appendChild(entry_input_frame);
    entry_input_frame.appendChild(entry_input_x);
    entry_input_frame.appendChild(entry_input_y);
    entry_input_frame.appendChild(entry_input_o);


}


function add_rnodes_entry(station){

    console.log(station);
    let entry_item = document.createElement("tr");
    let entry_title = document.createElement("td");
    entry_title.innerHTML = "rnodes";
    
    let entry_input_frame = document.createElement("td");
    let entry_window = document.createElement("select");
    entry_window.setAttribute("style","width: 100%");
    entry_window.setAttribute("size","3");
    entry_window.value = 0;
    let entry_input_0 = document.createElement("input");
    let entry_input_1 = document.createElement("input");
    let entry_input_o = document.createElement("input");

    entry_input_0.setAttribute("style", "width: 25%");
    entry_input_1.setAttribute("style", "width: 25%");
    entry_input_o.setAttribute("style", "width: 25%");

    entry_input_0.setAttribute("type", "number");
    entry_input_1.setAttribute("type", "number");
    entry_input_o.setAttribute("type", "number");

    function get_rnode_from_entry_window(){
    

        if(!isNaN(parseInt(entry_window.value))){        
            return station.rnodes[parseInt(entry_window.value)];
        }else{
            return station.rnodes[0];
        }
    }

    let rnode = get_rnode_from_entry_window();

    entry_input_0.value = ('r' in rnode) ? get_rnode_from_entry_window().r.toString() : get_rnode_from_entry_window().x.toString();
    entry_input_1.value = ('r' in rnode) ? get_rnode_from_entry_window().theta.toString() : get_rnode_from_entry_window().y.toString();
    entry_input_o.value = get_rnode_from_entry_window().o.toString();
    entry_window.addEventListener("change", () => {

        let rnode = get_rnode_from_entry_window();
        entry_input_0.value = ('r' in rnode) ? get_rnode_from_entry_window().r.toString() : get_rnode_from_entry_window().x.toString(); 
        entry_input_1.value = ('r' in rnode) ? get_rnode_from_entry_window().theta.toString() : get_rnode_from_entry_window().y.toString();
        entry_input_o.value = get_rnode_from_entry_window().o.toString();
    });

    entry_input_0.addEventListener("change", () => update_rnodes(get_rnode_from_entry_window(), ('r' in rnode) ? 'r' : 'x', parseFloat(entry_input_0.value), station, entry_window));
    entry_input_1.addEventListener("change", () => update_rnodes(get_rnode_from_entry_window(), ('r' in rnode) ? 'theta' : 'y', parseFloat(entry_input_1.value), station, entry_window));
    entry_input_o.addEventListener("change", () => update_rnodes(get_rnode_from_entry_window(), 'o', parseFloat(entry_input_o.value), station, entry_window));

    tbody.appendChild(entry_item);
    entry_item.appendChild(entry_title);
    entry_item.appendChild(entry_input_frame);
    entry_input_frame.appendChild(entry_window);
    entry_input_frame.appendChild(entry_input_0);
    entry_input_frame.appendChild(entry_input_1);
    entry_input_frame.appendChild(entry_input_o);

    let entry_new = document.createElement("button");
    entry_new.innerHTML = "*";
    entry_new.addEventListener("click", () => {

        let new_node = {
            "x" : 0,
            "y" : 0,
            "o" : 0
        };

        station.rnodes.push(new_node);
        display_rnodes(station, entry_window);

    });
    entry_input_frame.appendChild(entry_new);

    let entry_del = document.createElement("button");
    entry_del.innerHTML = "-";
    entry_del.addEventListener("click", () => {

        if(station.rnodes.length < 2){
            alert("Error: Each station needs atleast one rnode")
            return;
        }

        let rnode = get_rnode_from_entry_window();
        station.rnodes.splice(station.rnodes.indexOf(rnode), 1)
        display_rnodes(station, entry_window);

    });

    entry_input_frame.appendChild(entry_del);

    let entry_conv = document.createElement("button");
    entry_conv.innerHTML = "xy <-> rθ";
    entry_conv.addEventListener("click", () => {

        let rnode = get_rnode_from_entry_window();

        if('r' in rnode){
            rnode.x = rnode.r;
            rnode.y = rnode.theta;

            delete rnode.r;
            delete rnode.theta;
        }else{

            rnode.r = rnode.x;
            rnode.theta = rnode.y;

            delete rnode.x;
            delete rnode.y;
        }

        display_rnodes(station, entry_window);
    });
    entry_input_frame.appendChild(entry_conv);
    // feature window

    let entry_feature_item = document.createElement("tr");
    let entry_feature_title = document.createElement("td");
    let entry_feature_input_frame = document.createElement("td");
    entry_feature_title.innerHTML = "Features";

    tbody.appendChild(entry_feature_item);
    entry_feature_item.appendChild(entry_feature_title);
    entry_feature_item.appendChild(entry_feature_input_frame);
    
    let feature_window = document.createElement("select");
    feature_window.setAttribute("style","width: 100%");
    feature_window.setAttribute("size","3");
    entry_feature_input_frame.appendChild(feature_window);

    let style_select = document.createElement("select");
    entry_feature_input_frame.appendChild(style_select);

    let feature_insert = document.createElement("button");
    feature_insert.innerHTML = "+";
    feature_insert.addEventListener("click",() => {

        let rnode_index = (isNaN(parseInt(entry_window.value))) ? 0 : parseInt(entry_window.value);
        let selected_style_id = style_select.value;

        let new_feature = {

            "type" : "station",
            "use_id" : selected_style_id,
            "target": rnode_index

        }

        station.features.push(new_feature);
        display_features(station,feature_window);

    })
    entry_feature_input_frame.appendChild(feature_insert);

    let feature_delete = document.createElement("button");
    feature_delete.innerHTML = "-";
    feature_delete.addEventListener("click", () => {

        if (isNaN(parseInt(feature_window.value))) return;
        let selected_feature_index = parseInt(feature_window.value);
        station.features.splice(selected_feature_index, 1);

        display_features(station,feature_window);

    })


    entry_feature_input_frame.appendChild(feature_delete);

    display_all_styles(style_select);
    display_rnodes(station, entry_window);
    display_features(station, feature_window);
    
}



function display_station_properties(id){

    console.log(id);
    let station = get_station_from_id(id);
    console.log(station);

    let prop_ui = document.querySelector("#prop_select");
    let table = prop_ui.children[0];
    let tbody = table.children[1];
    tbody.innerHTML = ''

    add_simple_entry(station, "Name", "name");
    add_simple_entry(station, "ID", "id");
    add_pivot_entry(station);
    add_rnodes_entry(station);

}

function display_line_properties(id){

    let branch_select_val = id.split(",");
    console.log(id);
    let selected_pathnode = data.lines[parseInt(branch_select_val[0])].paths[parseInt(branch_select_val[1])][parseInt(branch_select_val[2])];
    console.log(selected_pathnode);
    let prop_ui = document.querySelector("#prop_line");
    let table = prop_ui.children[0];
    let tbody = table.children[1];
    tbody.innerHTML = ''

    add_simple_line_entry(selected_pathnode, "Station_ID", "station_id");
    add_simple_line_entry(selected_pathnode, "Index", "index");
    add_simple_line_entry(selected_pathnode, "Linkage", "linkage");
    if('linkage_prop' in selected_pathnode){
        add_simple_line_entry(selected_pathnode.linkage_prop, "Offset", "offset");
        add_simple_line_entry(selected_pathnode.linkage_prop, "Reversed", "reverse");
    }

}

let element_list_ui = document.querySelector("#element_select");
let branch_ui = document.querySelector("#branch_select");
let line_ui = document.querySelector("#line_select");
element_list_ui.addEventListener("change", () => display_station_properties(element_list_ui.value));
branch_ui.addEventListener("change", () => display_line_properties(branch_ui.value));
display_items();

construct_map(data);

pf.addEventListener("mousemove", mouseMoved);

function mouseMoved(event){
    var canvasMouseX = event.clientX - (pf.offsetLeft - window.pageXOffset);
    var canvasMouseY = event.clientY - (pf.offsetTop - window.pageYOffset);
    // console.log(canvasMouseX + " " + canvasMouseY);

}

