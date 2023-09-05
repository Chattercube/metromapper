let data2 = {

    "station_styles":{
        "ss0":{
            "id" : "ss0", "name" : "Circle Station",

            "geometry": "roundrect",
            "construct":[
                {
                    "geometry": "roundrect",
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
                    "geometry": "roundrect",
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
                },
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
                    "target": 0,
                    "use_id": "ss0"

                },
                {
                    "type": "nameLabel",
                    "target": 0,

                    "offsetx": 0,
                    "offsety": -20,
                    "textAlign": "center"
                }
            ]

        }

    ],

    "lines":[
        {

            "id": "tun", "name": "Tung Chung Line",

            "construct":[
                {"strokeStyle": "#000000", "lineWidth": 10},
                {"strokeStyle": "#d3803e", "lineWidth": 8}
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
                {"strokeStyle": "#c1507f", "lineWidth": 8}
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
                {"strokeStyle": "#0b4b5d", "lineWidth": 8}
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
}

export {data2};