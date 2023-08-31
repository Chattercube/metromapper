import {data2} from "./data.js"
import {construct_map} from "./maprenderer.js"

let data = data2;
// function refresh_element_value(ele_id, subject,field){

//     let input_element = document.querySelector(ele_id);
//     console.log(input_element);
//     input_element.value = subject[field]; 
// }

// function link_element_value(ele_id, subject, field){

//     let input_element = document.querySelector(ele_id);
//     refresh_element_value(ele_id, subject, field);

//     input_element.addEventListener("change", () => {
//         subject[field] = input_element.value;
//     })

// }

// function display_station_select(ele_id){

//     let station_select_window = document.querySelector(ele_id);
//     station_select_window.innerHTML = ''; // clear all items

//     let i = 0;
//     for(let station of data.stations){
//         let list_item = document.createElement("option");
//         list_item.innerHTML = station.name + " (" + station.id + ")";
//         list_item.value = i; // list_item.value = station.id;
//         station_select_window.appendChild(list_item)
//         i++;
//     }

//     station_select_window.value=5;

    
//     return station_select_window;

// }

// function link_station_select(ele_id){

//     let station_select_window = document.querySelector(ele_id);
//     link_element_value("#station_ID_input", data.stations[station_select_window.value], "id");
//     station_select_window.addEventListener("changed",() => {

//         refresh_element_value("#station_ID_input", data.stations[station_select_window.value], "id");

//     })
// }


// Select and Display items in an array

const tm_event = new CustomEvent("target_modified");
// When the target/data is modified or mutated


class RawArrayEntry{ 

    constructor(target, visual){

        this.target = target;
        this.visual = visual;
        // this.visual.value = 0;
        // Event when the target has modified

    }

    get_label_from_item(i, item){
        return ""; //
    };

    display_to_visual(){

        this.visual.innerHTML = ''
        let i = 0;
        for(let item of this.target){
            let list_item = document.createElement("option");
            list_item.innerHTML = this.get_label_from_item(i, item);
            list_item.value = i;
            this.visual.appendChild(list_item);
            i++;
        }

    }

    get getSelectedObject(){

        return this.target[this.visual.value];

    }


    enable(){

        
        this.display_to_visual();

        this.visual.addEventListener("target_modified",() => {
            let old_val = this.visual.value;
            this.display_to_visual();
            this.visual.value = old_val;
        });

    }
}

class ArrayEntry{ 

    constructor(targetEntry, visual){

        this.targetEntry = targetEntry;
        this.visual = visual;
        // Event when the target has modified

    }

    get_label_from_item(i, item){
        return "/"; //
    };

    getTarget(){
        return this.targetEntry.getSelectedObject;
    }

    display_to_visual(){

        this.visual.innerHTML = ''
        let i = 0;
        for(let item of this.getTarget()){
            let list_item = document.createElement("option");
            list_item.innerHTML = this.get_label_from_item(i, item);
            list_item.value = i;
            this.visual.appendChild(list_item);
            i++;
        }

    }

    get getSelectedObject(){

        return this.getTarget()[this.visual.value];

    }

    enable(){

        // this.display_to_visual();

        this.visual.addEventListener("target_modified",() => {
            let old_val = this.visual.value;
            this.display_to_visual();
            construct_map(data);
            this.visual.value = old_val;
        });

        this.targetEntry.visual.addEventListener("change", () => {

            this.display_to_visual();

        })

    }
}


// target is a RawDataEntry or a DataEntry Element
class ValueEntry{
    
    constructor(targetEntry, visual, attribute){

        this.targetEntry = targetEntry;
        this.visual = visual;
        this.attribute = attribute;
        
    }

    get_label_from_item(i, item){return "";};

    process_input(input){return this.visual.value;}

    getTarget(){
        return this.targetEntry.getSelectedObject;
    }

    display_to_visual(){

        if(!this.targetEntry.getSelectedObject){return;};
        this.visual.value = this.getTarget()[this.attribute];

    }

    update_to_target_attribute(){

        if(!this.targetEntry.getSelectedObject){return;};
        this.getTarget()[this.attribute] = this.visual.value;

    }

    get getValue(){

        return this.visual.value;

    }

    enable(){

        // this.display_to_visual();
        
        this.visual.addEventListener("change", () => {

            this.update_to_target_attribute();
            this.targetEntry.visual.dispatchEvent(tm_event);
            construct_map(data);

        })

        this.targetEntry.visual.addEventListener("change", () => {

            this.display_to_visual();
            

        })
    }

}

function get_station_from_id(id){
    // console.log(datapoint);
    return data.stations.find((element)=>element.id == id);
}

let station_select_window = document.querySelector("#station_select");
let stations_rae = new RawArrayEntry(data.stations, station_select_window);
stations_rae.get_label_from_item = (i, item) => {return item.name + " (" + item.id + ")";}
stations_rae.enable();

console.log(station_select_window.getSelectedObject);

let station_id_input = document.querySelector("#station_ID_input");
let station_id_ve = new ValueEntry(stations_rae, station_id_input, 'id');
station_id_ve.enable();

let station_name_input = document.querySelector("#station_name_input");
let station_name_ve = new ValueEntry(stations_rae, station_name_input, 'name');
station_name_ve.enable();

let station_pivot_x_input = document.querySelector("#station_pivot_x_input");
let station_pivot_x_input_ve = new ValueEntry(stations_rae, station_pivot_x_input, 'placeholder');

station_pivot_x_input_ve.display_to_visual = () => {

    if(!station_pivot_x_input_ve.getTarget()){return;};
    station_pivot_x_input_ve.visual.value = station_pivot_x_input_ve.getTarget().pivot.x;

}
station_pivot_x_input_ve.update_to_target_attribute = () => {

    if(!station_pivot_x_input_ve.getTarget()){return;};
    station_pivot_x_input_ve.getTarget().pivot.x = parseFloat(station_pivot_x_input_ve.visual.value);

}
station_pivot_x_input_ve.enable();

let station_pivot_y_input = document.querySelector("#station_pivot_y_input");
let station_pivot_y_input_ve = new ValueEntry(stations_rae, station_pivot_y_input, 'placeholder');

station_pivot_y_input_ve.display_to_visual = () => {

    if(!station_pivot_y_input_ve.getTarget()){return;};
    station_pivot_y_input_ve.visual.value = station_pivot_y_input_ve.getTarget().pivot.y;

}
station_pivot_y_input_ve.update_to_target_attribute = () => {

    if(!station_pivot_y_input_ve.getTarget()){return;};
    station_pivot_y_input_ve.getTarget().pivot.y = parseFloat(station_pivot_y_input_ve.visual.value);

}
station_pivot_y_input_ve.enable();

let station_pivot_o_input = document.querySelector("#station_pivot_o_input");
let station_pivot_o_input_ve = new ValueEntry(stations_rae, station_pivot_o_input, 'placeholder');

station_pivot_o_input_ve.display_to_visual = () => {

    if(!station_pivot_o_input_ve.getTarget()){return;};
    station_pivot_o_input_ve.visual.value = station_pivot_o_input_ve.getTarget().pivot.o;

}
station_pivot_o_input_ve.update_to_target_attribute = () => {

    if(!station_pivot_o_input_ve.getTarget()){return;};
    station_pivot_o_input_ve.getTarget().pivot.o = parseFloat(station_pivot_o_input_ve.visual.value);

}
station_pivot_o_input_ve.enable();

let station_rnodes_select = document.querySelector("#station_rnodes_select");
let station_rnodes_select_ae = new ArrayEntry(stations_rae, station_rnodes_select);
station_rnodes_select_ae.getTarget = () => {
    return stations_rae.getSelectedObject.rnodes;
}
station_rnodes_select_ae.get_label_from_item = (i, item) => {
    if('r' in item){
        return `[${i}] r: ${item.r}, theta: ${item.theta}, o: ${item.o}`;
    }else{
        return `[${i}] x: ${item.x}, y: ${item.y}, o: ${item.o}`;
    }
}
station_rnodes_select_ae.enable();



let rnode_0_input = document.querySelector("#rnode_0_input");
let rnode_0_input_ve = new ValueEntry(station_rnodes_select_ae, rnode_0_input);
rnode_0_input_ve.display_to_visual = () => {

    let t = rnode_0_input_ve.getTarget();
    if(!t){return;};
    if('r' in t){
    rnode_0_input_ve.visual.value = t.r;
     }else{
    rnode_0_input_ve.visual.value = t.x;
    }

}
rnode_0_input_ve.update_to_target_attribute = () => {

    let t = rnode_0_input_ve.getTarget();
    if(!t){return;};
    if('r' in t){
        t.r = parseFloat(rnode_0_input_ve.visual.value);
    }else{
        t.x = parseFloat(rnode_0_input_ve.visual.value);
    }

}
rnode_0_input_ve.enable();



let rnode_1_input = document.querySelector("#rnode_1_input");
let rnode_1_input_ve = new ValueEntry(station_rnodes_select_ae, rnode_1_input);
rnode_1_input_ve.display_to_visual = () => {

    let t = rnode_1_input_ve.getTarget();
    if(!t){return;};
    if('r' in t){
    rnode_1_input_ve.visual.value = t.theta;
     }else{
    rnode_1_input_ve.visual.value = t.y;
    }

}
rnode_1_input_ve.update_to_target_attribute = () => {

    let t = rnode_1_input_ve.getTarget();
    if(!t){return;};
    if('r' in t){
        t.theta = parseFloat(rnode_1_input_ve.visual.value);
    }else{
        t.y = parseFloat(rnode_1_input_ve.visual.value);
    }

}
rnode_1_input_ve.enable();



let rnode_o_input = document.querySelector("#rnode_o_input");
let rnode_o_input_ve = new ValueEntry(station_rnodes_select_ae, rnode_o_input);
rnode_o_input_ve.display_to_visual = () => {

    let t = rnode_o_input_ve.getTarget();
    if(!t){return;};
    rnode_o_input_ve.visual.value = t.o;
}
rnode_o_input_ve.update_to_target_attribute = () => {

    let t = rnode_o_input_ve.getTarget();
    if(!t){return;};
    t.o = parseFloat(rnode_o_input_ve.visual.value);

}
rnode_o_input_ve.enable();

let station_feature_select = document.querySelector("#station_features_select");
let station_feature_select_ae = new ArrayEntry(stations_rae, station_feature_select);
station_feature_select_ae.getTarget = () => {
    return stations_rae.getSelectedObject.features;
}
station_feature_select_ae.get_label_from_item = (i, item) => {
    return `[${item.target}] : ${data.station_styles[item.use_id].name}`;
}
station_feature_select_ae.enable();

let station_add_style_select = document.querySelector("#station_add_style_select");
let station_add_style_optgroup = document.querySelector("#station_add_style_optgroup");
let station_add_style_select_ae = new RawArrayEntry(data.station_styles, station_add_style_optgroup);
station_add_style_select_ae.get_label_from_item = (i, item) => {
    return `(${item.id}) : ${item.name}`;
}
station_add_style_select_ae.display_to_visual = () => {

    let _this = station_add_style_select_ae;
    _this.visual.innerHTML = ''
    let i = 0;
    for(let [key, item] of Object.entries(_this.target)){
        let list_item = document.createElement("option");
        list_item.innerHTML = _this.get_label_from_item(i, item);
        list_item.value = key;
        _this.visual.appendChild(list_item);
        i++;
    }

}
station_add_style_select_ae.enable();



let line_select = document.querySelector("#line_select");
let line_select_rae = new RawArrayEntry(data.lines, line_select);
line_select_rae.get_label_from_item = (i, item) => {
    return `${item.name}`;
}
line_select_rae.enable();



let pathnode_select = document.querySelector("#pathnode_select");
let pathnode_select_ae = new ArrayEntry(line_select_rae, pathnode_select);
pathnode_select_ae.display_to_visual = () => {

    let _this = pathnode_select_ae;
    _this.visual.innerHTML = ''

    let i = 0;
        for(let branch of _this.getTarget().paths){

            let optgroup_item = document.createElement("optgroup");
            optgroup_item.label = i;
            _this.visual.appendChild(optgroup_item);

            let j = 0;
            for(let pathnode of branch){
                let list_item = document.createElement("option");
                let station = get_station_from_id(pathnode.station_id);
                if(typeof station != 'undefined'){
                    list_item.innerHTML = `${station.name}: rnode${pathnode.index}`;
                }else{
                    list_item.innerHTML = `${pathnode.station_id}: rnode${pathnode.index}`
                }
                
                list_item.value = `${i},${j}`;
                optgroup_item.appendChild(list_item);
                j++;

            }
            i++;
        }
}
Object.defineProperty(pathnode_select_ae, "getSelectedObject", {

    get: function(){
        const _this = pathnode_select_ae;
        let values = _this.visual.value.split(",");
        return _this.getTarget().paths[values[0]][values[1]];
    }

});
pathnode_select_ae.enable();



let pathnode_sta_id_input = document.querySelector("#pathnode_sta_id_input");
let pathnode_sta_id_input_ve = new ValueEntry(pathnode_select_ae, pathnode_sta_id_input, 'station_id');
pathnode_sta_id_input_ve.enable();

let pathnode_index_input = document.querySelector("#pathnode_index_input");
let pathnode_index_input_ve = new ValueEntry(pathnode_select_ae, pathnode_index_input, 'index');
pathnode_index_input_ve.enable();

let pathnode_linkage_select = document.querySelector("#pathnode_linkage_select");
let pathnode_linkage_select_ve = new ValueEntry(pathnode_select_ae, pathnode_linkage_select, 'linkage');
pathnode_linkage_select_ve.enable();

let pathnode_prop_offset_input = document.querySelector("#pathnode_prop_offset_input");
let pathnode_prop_offset_input_ve = new ValueEntry(pathnode_select_ae, pathnode_prop_offset_input, 'placeholder');
pathnode_prop_offset_input_ve.display_to_visual = () => {

    const _this = pathnode_prop_offset_input_ve
    if(!_this.getTarget()){return;};
    _this.visual.value =_this.getTarget().linkage_prop.offset;

}
pathnode_prop_offset_input_ve.update_to_target_attribute = () => {

    const _this = pathnode_prop_offset_input_ve
    if(!_this.getTarget()){return;};
    _this.getTarget().linkage_prop.offset = parseFloat(_this.visual.value);

}
pathnode_prop_offset_input_ve.enable();

let pathnode_prop_reverse_input = document.querySelector("#pathnode_prop_reverse_input");
let pathnode_prop_reverse_input_ve = new ValueEntry(pathnode_select_ae, pathnode_prop_reverse_input, 'placeholder');
pathnode_prop_reverse_input_ve.display_to_visual = () => {

    const _this = pathnode_prop_reverse_input_ve
    if(!_this.getTarget()){return;};
    _this.visual.checked = _this.getTarget().linkage_prop.reverse;

}
pathnode_prop_reverse_input_ve.update_to_target_attribute = () => {

    const _this = pathnode_prop_reverse_input_ve
    if(!_this.getTarget()){return;};
    _this.getTarget().linkage_prop.reverse = _this.visual.checked == true;

}
pathnode_prop_reverse_input_ve.enable();



let construct_select = document.querySelector("#construct_select");
let construct_select_ae = new ArrayEntry(line_select_rae, construct_select);
construct_select_ae.getTarget = () => {
    return line_select_rae.getSelectedObject.construct;
}
construct_select_ae.get_label_from_item = (i, item) => {
    return `Color: ${item.strokeStyle}, Width: ${item.lineWidth}`;
}
construct_select_ae.enable();

let construct_strokeStyle_input = document.querySelector("#construct_strokeStyle_input");
let construct_strokeStyle_input_ve = new ValueEntry(construct_select_ae, construct_strokeStyle_input, 'strokeStyle');
construct_strokeStyle_input_ve.enable();

let construct_lineWidth_input = document.querySelector("#construct_lineWidth_input");
let construct_lineWidth_input_ve = new ValueEntry(construct_select_ae, construct_lineWidth_input, 'lineWidth');
construct_lineWidth_input_ve.enable();

let line_id_input = document.querySelector("#line_ID_input");
let line_id_input_ve = new ValueEntry(line_select_rae, line_id_input, 'id');
line_id_input_ve.enable();

let line_name_input = document.querySelector("#line_name_input");
let line_name_input_ve = new ValueEntry(line_select_rae, line_name_input, 'name');
line_name_input_ve.enable();





let line_new = document.querySelector("#line_new");
line_new.addEventListener("click", () => {

    let new_line_name = prompt("Name of the line");
    let new_line_id = prompt("ID of the line");

    let new_line = {

        "id": new_line_id,
        "name": new_line_name,
        
        "construct": [],

        "paths": [[]]

    }

    data.lines.push(new_line);
    line_select_rae.visual.dispatchEvent(tm_event);

})

let line_delete = document.querySelector("#line_delete");
line_delete.addEventListener("click", () => {

    if(!confirm("Are you sure you wanted to delete the selected line?")){return;}
    data.lines.splice(data.lines.indexOf(line_select_rae.getSelectedObject), 1);
    line_select_rae.visual.dispatchEvent(tm_event);

})



let construct_new = document.querySelector("#construct_new");
construct_new.addEventListener("click", () => {

    let new_cst = {

        "strokeStyle" : "#ff0000",
        "lineWidth" : 10

    }

    line_select_rae.getSelectedObject.construct.push(new_cst);
    construct_select_ae.visual.dispatchEvent(tm_event);

})

let construct_delete = document.querySelector("#construct_delete");
construct_delete.addEventListener("click", () => {

    const parent = line_select_rae.getSelectedObject.construct;
    const subject = construct_select_ae.getSelectedObject;

    if(!confirm("Are you sure you wanted to delete the selected construct element?")){return;}
    parent.splice(parent.indexOf(subject), 1);
    construct_select_ae.visual.dispatchEvent(tm_event);

})

let construct_shuffle_up = document.querySelector("#construct_shuffle_up");
construct_shuffle_up.addEventListener("click", () => {

    const parent = line_select_rae.getSelectedObject.construct;
    const subject = construct_select_ae.getSelectedObject;
    const index = parent.indexOf(subject)
    if(index < 1){return;}

    parent[index] = parent.splice(index - 1, 1, parent[index])[0];

    construct_select_ae.visual.dispatchEvent(tm_event);
    construct_select_ae.visual.value = index - 1;

})

let construct_shuffle_down = document.querySelector("#construct_shuffle_down");
construct_shuffle_down.addEventListener("click", () => {

    const parent = line_select_rae.getSelectedObject.construct;
    const subject = construct_select_ae.getSelectedObject;
    const index = parent.indexOf(subject)
    if(index > parent.length-2){return;}

    parent[index] = parent.splice(index + 1, 1, parent[index])[0];

    construct_select_ae.visual.dispatchEvent(tm_event);
    construct_select_ae.visual.value = index + 1;

})

let branch_new = document.querySelector("#branch_new");
branch_new.addEventListener("click", () => {

    let new_branch = [{
        "station_id" : "new",
        "index" : 0,
        "linkage": "diagonal",
        "linkage_prop":{
            "offset": 0,
            "reverse": true
    }}];

    line_select_rae.getSelectedObject.paths.push(new_branch);
    pathnode_select_ae.visual.dispatchEvent(tm_event);

})

let branch_delete = document.querySelector("#branch_delete");
branch_delete.addEventListener("click", () => {

    const parent = line_select_rae.getSelectedObject.paths;
    const subject = line_select_rae.getSelectedObject.paths[parseInt(pathnode_select_ae.visual.value.split(",")[0])];

    if(!confirm("Are you sure you wanted to delete the selected construct element?")){return;}
    parent.splice(parent.indexOf(subject), 1);
    pathnode_select_ae.visual.dispatchEvent(tm_event);

})


let pathnode_new = document.querySelector("#pathnode_new");
pathnode_new.addEventListener("click", () => {

    let selected_branch = line_select_rae.getSelectedObject.paths[parseInt(pathnode_select_ae.visual.value.split(",")[0])];

    console.log(selected_branch);
    let new_pathnode = {
        "station_id" : "new",
        "index" : 0,
        "linkage": "diagonal",
        "linkage_prop":{
            "offset": 0,
            "reverse": true
    }}

    selected_branch.push(new_pathnode);
    pathnode_select_ae.visual.dispatchEvent(tm_event);

})

let pathnode_delete = document.querySelector("#pathnode_delete");
pathnode_delete.addEventListener("click", () => {

    const parent = line_select_rae.getSelectedObject.paths[parseInt(pathnode_select_ae.visual.value.split(",")[0])];
    const subject = pathnode_select_ae.getSelectedObject;

    if(parent.length < 2){
        alert("Each branch should contain atleast one pathnode");
        return;
    }

    if(!confirm("Are you sure you wanted to delete the selected construct element?")){return;}
    parent.splice(parent.indexOf(subject), 1);
    pathnode_select_ae.visual.dispatchEvent(tm_event);

})

let pathnode_shuffle_up = document.querySelector("#pathnode_shuffle_up");
pathnode_shuffle_up.addEventListener("click", () => {

    const parent = line_select_rae.getSelectedObject.paths[parseInt(pathnode_select_ae.visual.value.split(",")[0])];
    const subject = pathnode_select_ae.getSelectedObject;
    const index = parent.indexOf(subject)
    if(index < 1){return;}

    parent[index] = parent.splice(index - 1, 1, parent[index])[0];

    pathnode_select_ae.visual.dispatchEvent(tm_event);
    pathnode_select_ae.visual.value = `${parseInt(pathnode_select_ae.visual.value.split(",")[0])},${parseInt(pathnode_select_ae.visual.value.split(",")[1]-1)}`;

})

let pathnode_shuffle_down = document.querySelector("#pathnode_shuffle_down");
pathnode_shuffle_down.addEventListener("click", () => {

    const parent = line_select_rae.getSelectedObject.paths[parseInt(pathnode_select_ae.visual.value.split(",")[0])];
    const subject = pathnode_select_ae.getSelectedObject;
    const index = parent.indexOf(subject)
    if(index > parent.length-2){return;}

    parent[index] = parent.splice(index + 1, 1, parent[index])[0];

    pathnode_select_ae.visual.dispatchEvent(tm_event);
    pathnode_select_ae.visual.value = `${parseInt(pathnode_select_ae.visual.value.split(",")[0])},${parseInt(pathnode_select_ae.visual.value.split(",")[1]+1)}`;

})

let branch_shuffle_up = document.querySelector("#branch_shuffle_up");
branch_shuffle_up.addEventListener("click", () => {

    const parentIndex = parseInt(pathnode_select_ae.visual.value.split(",")[0]);
    const parent = line_select_rae.getSelectedObject.paths[parentIndex];
    const subject = pathnode_select_ae.getSelectedObject;

    if(parentIndex < 1){return;}

    line_select_rae.getSelectedObject.paths[parentIndex-1].push(subject);
    parent.splice(parent.indexOf(subject), 1);

    pathnode_select_ae.visual.dispatchEvent(tm_event);
    pathnode_select_ae.visual.value = `${parentIndex-1},${line_select_rae.getSelectedObject.paths[parentIndex-1].length}`;

})

let branch_shuffle_down = document.querySelector("#branch_shuffle_down");
branch_shuffle_down.addEventListener("click", () => {

    const parentIndex = parseInt(pathnode_select_ae.visual.value.split(",")[0]);
    const parent = line_select_rae.getSelectedObject.paths[parentIndex];
    const subject = pathnode_select_ae.getSelectedObject;

    if(parentIndex > line_select_rae.getSelectedObject.paths.length-2){return;}

    line_select_rae.getSelectedObject.paths[parentIndex+1].push(subject);
    parent.splice(parent.indexOf(subject), 1);

    pathnode_select_ae.visual.dispatchEvent(tm_event);
    pathnode_select_ae.visual.value = `${parentIndex+1},${line_select_rae.getSelectedObject.paths[parentIndex-1].length}`;

})












let station_new = document.querySelector("#station_new");
station_new.addEventListener("click", () => {

    let new_station_name = prompt("Name of the line");
    let new_station_id = prompt("ID of the line");

    let new_station = {

        "id": new_station_id,
        "name": new_station_name,
        
        "pivot":{ "x" : 0 , "y" : 0, "o": 0},

            
        "rnodes":[
                { "x" : 0, "y": 0, "o": 0}
            ],

        "features":[
            {
                "type": "station",
                "use_id": "ss0",
                "target": 0
            }
        ]

    }

    data.stations.push(new_station);
    stations_rae.visual.dispatchEvent(tm_event);

})

let station_delete = document.querySelector("#station_delete");
station_delete.addEventListener("click", () => {

    const parent = data.stations;
    const subject = stations_rae.getSelectedObject;

    if(!confirm("Are you sure you wanted to delete the selected station?")){return;}
    parent.splice(parent.indexOf(subject), 1);
    stations_rae.visual.dispatchEvent(tm_event);

})

let station_shuffle_up = document.querySelector("#station_shuffle_up");
station_shuffle_up.addEventListener("click", () => {

    const parent = data.stations;
    const subject = stations_rae.getSelectedObject;

    const index = parent.indexOf(subject)
    if(index < 1){return;}

    parent[index] = parent.splice(index - 1, 1, parent[index])[0];

    stations_rae.visual.dispatchEvent(tm_event);
    stations_rae.visual.value = index - 1;

})

let station_shuffle_down = document.querySelector("#station_shuffle_down");
station_shuffle_down.addEventListener("click", () => {

    const parent = data.stations;
    const subject = stations_rae.getSelectedObject;

    const index = parent.indexOf(subject)
    if(index > parent.length-2){return;}

    parent[index] = parent.splice(index + 1, 1, parent[index])[0];

    stations_rae.visual.dispatchEvent(tm_event);
    stations_rae.visual.value = index + 1;

})



let station_rnode_new = document.querySelector("#station_rnode_new");
station_rnode_new.addEventListener("click", () => {

    let new_rnode = {
        "x" : 0,
        "y" : 0,
        "o" : 0
    };

    stations_rae.getSelectedObject.rnodes.push(new_rnode);
    station_rnodes_select_ae.visual.dispatchEvent(tm_event);

})

let station_rnode_delete = document.querySelector("#station_rnode_delete");
station_rnode_delete.addEventListener("click", () => {

    const parent = stations_rae.getSelectedObject.rnodes;
    const subject = station_rnodes_select_ae.getSelectedObject;

    // if(!confirm("Are you sure you wanted to delete the selected construct element?")){return;}
    parent.splice(parent.indexOf(subject), 1);
    station_rnodes_select_ae.visual.dispatchEvent(tm_event);

})

let station_rnode_convert = document.querySelector("#station_rnode_convert");
station_rnode_convert.addEventListener("click", () => {

    const subject = station_rnodes_select_ae.getSelectedObject;

    // if(!confirm("Are you sure you wanted to delete the selected construct element?")){return;}
    if('r' in subject){
        subject.x = subject.r;
        subject.y = subject.theta;

        delete subject.r;
        delete subject.theta;
    }else{

        subject.r = subject.x;
        subject.theta = subject.y;

        delete subject.x;
        delete subject.y;
    }
    station_rnodes_select_ae.visual.dispatchEvent(tm_event);

})

let station_feature_new = document.querySelector("#station_feature_new");
station_feature_new.addEventListener("click", () => {


    console.log(station_add_style_select.value);
    let new_feature = {

        "type": "station",
        "use_id": station_add_style_select.value,
        "target": parseInt(station_rnodes_select_ae.visual.value)

    }

    stations_rae.getSelectedObject.features.push(new_feature);
    station_feature_select_ae.visual.dispatchEvent(tm_event);


})

let station_feature_delete = document.querySelector("#station_feature_delete");
station_feature_delete.addEventListener("click", () => {

    const parent = stations_rae.getSelectedObject.features;
    const subject = station_feature_select_ae.getSelectedObject;


    parent.splice(parent.indexOf(subject), 1);
    station_feature_select_ae.visual.dispatchEvent(tm_event);

})

function export_to_text(){

    let data_text = document.querySelector("#data_text");
    data_text.value = JSON.stringify(data, " ", 4);

}

document.querySelector("#export_button").addEventListener("click",()=>{

    export_to_text();

})

document.querySelector("#import_button").addEventListener("click",()=>{

    let data_text = document.querySelector("#data_text");
    data = JSON.parse(data_text.value);
    console.log(data);
    construct_map(data);

})

console.log(data);


construct_map(data);
export_to_text()