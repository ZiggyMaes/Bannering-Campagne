/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg_blue',
                            type: 'rect',
                            rect: ['0px', '0px', '336px', '280px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(52,182,212,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'bg_music',
                            display: 'none',
                            volume: '0.2',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['157', '160', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            source: [aud+"bg_music.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'logo_95',
                            display: 'block',
                            type: 'image',
                            rect: ['24px', '0px', '287px', '280px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"95_years.gif",'0px','0px']
                        },
                        {
                            id: 'picture_beginning',
                            display: 'none',
                            type: 'image',
                            rect: ['-344px', '0px', '336px', '185px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"beginning.png",'0px','0px']
                        },
                        {
                            id: 'text_beginning',
                            display: 'none',
                            type: 'text',
                            rect: ['23px', 'auto', '313px', '90px', 'auto', '-95px'],
                            opacity: '1',
                            text: "From the beginning of our journey in 1919",
                            align: "left",
                            font: ['Tahoma, Geneva, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'clouds',
                            display: 'none',
                            type: 'image',
                            rect: ['336px', '0px', '1120px', '280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"clouds.png",'0px','0px']
                        },
                        {
                            id: 'wingtip',
                            display: 'none',
                            type: 'image',
                            rect: ['-269px', '38px', '269px', '242px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"wingtip.png",'0px','0px']
                        },
                        {
                            id: 'sym_bringingworld',
                            symbolName: 'sym_bringingworld',
                            display: 'none',
                            type: 'rect',
                            rect: ['-347px', '185px', '336', '95', 'auto', 'auto'],
                            opacity: '0.80487804878049'
                        },
                        {
                            id: 'brazil',
                            display: 'none',
                            type: 'image',
                            rect: ['-80px', '-280px', '505px', '280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"brazil.jpg",'0px','0px']
                        },
                        {
                            id: 'snow',
                            display: 'none',
                            type: 'image',
                            rect: ['-87px', '-282px', '509px', '280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"snow.jpg",'0px','0px']
                        },
                        {
                            id: 'airport',
                            display: 'none',
                            type: 'image',
                            rect: ['341px', '0px', '458px', '280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"airport.jpg",'0px','0px']
                        },
                        {
                            id: 'sym_passengers',
                            symbolName: 'sym_passengers',
                            display: 'none',
                            type: 'rect',
                            rect: ['-349px', '206px', '336', '74', 'auto', 'auto'],
                            opacity: '0.80487792908661'
                        },
                        {
                            id: 'work_efficient',
                            display: 'none',
                            type: 'image',
                            rect: ['339px', '0px', '506px', '280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"work_efficient.png",'0px','0px']
                        },
                        {
                            id: 'sym_efficient',
                            symbolName: 'sym_efficient',
                            display: 'none',
                            type: 'rect',
                            rect: ['-336px', '185px', '336', '95', 'auto', 'auto'],
                            opacity: '0.80487804878049'
                        },
                        {
                            id: 'picture_modern_fleet',
                            display: 'none',
                            type: 'image',
                            rect: ['-9px', '82px', '420px', '198px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"picture_modern_fleet.jpg",'0px','0px']
                        },
                        {
                            id: 'text_innovation',
                            symbolName: 'text_innovation',
                            display: 'none',
                            type: 'rect',
                            rect: ['343px', '-5px', '336', '95', 'auto', 'auto']
                        },
                        {
                            id: 'boy_dog',
                            display: 'block',
                            type: 'image',
                            rect: ['-8px', '0px', '369px', '280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"boy_dog.jpg",'0px','0px']
                        },
                        {
                            id: 'landing_dawn',
                            display: 'none',
                            type: 'image',
                            rect: ['-13px', '0px', '384px', '280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"landing_dawn.jpg",'0px','0px']
                        },
                        {
                            id: 'text_care',
                            symbolName: 'text_care',
                            display: 'none',
                            type: 'rect',
                            rect: ['-336px', '0px', '336', '95', 'auto', 'auto'],
                            opacity: '0.79674796747967'
                        },
                        {
                            id: 'eraser',
                            type: 'rect',
                            rect: ['-345px', '185px', '336px', '95px', 'auto', 'auto'],
                            fill: ["rgba(0,130,160,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'text_together',
                            symbolName: 'text_together',
                            display: 'none',
                            type: 'rect',
                            rect: ['-359', '0px', '336', '95', 'auto', 'auto'],
                            opacity: '0.80487804878049'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '336px', '280px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 15020.408,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${logo_95}",
                            'block',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${logo_95}",
                            'none',
                            'block'
                        ],
                        [
                            "eid138",
                            "display",
                            14750,
                            0,
                            "linear",
                            "${logo_95}",
                            'block',
                            'block'
                        ],
                        [
                            "eid74",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wingtip}",
                            'none',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            2921,
                            0,
                            "linear",
                            "${wingtip}",
                            'none',
                            'block'
                        ],
                        [
                            "eid63",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${wingtip}",
                            'block',
                            'none'
                        ],
                        [
                            "eid73",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym_bringingworld}",
                            'none',
                            'none'
                        ],
                        [
                            "eid76",
                            "display",
                            2921,
                            0,
                            "linear",
                            "${sym_bringingworld}",
                            'none',
                            'block'
                        ],
                        [
                            "eid65",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${sym_bringingworld}",
                            'block',
                            'none'
                        ],
                        [
                            "eid44",
                            "top",
                            2921,
                            250,
                            "linear",
                            "${wingtip}",
                            '280px',
                            '38px'
                        ],
                        [
                            "eid52",
                            "top",
                            3250,
                            250,
                            "linear",
                            "${wingtip}",
                            '38px',
                            '26px'
                        ],
                        [
                            "eid53",
                            "top",
                            3750,
                            250,
                            "linear",
                            "${wingtip}",
                            '26px',
                            '38px'
                        ],
                        [
                            "eid54",
                            "top",
                            4250,
                            250,
                            "linear",
                            "${wingtip}",
                            '38px',
                            '26px'
                        ],
                        [
                            "eid58",
                            "top",
                            4750,
                            250,
                            "linear",
                            "${wingtip}",
                            '26px',
                            '38px'
                        ],
                        [
                            "eid115",
                            "top",
                            11750,
                            250,
                            "linear",
                            "${text_innovation}",
                            '-5px',
                            '-95px'
                        ],
                        [
                            "eid109",
                            "top",
                            10500,
                            250,
                            "linear",
                            "${picture_modern_fleet}",
                            '286px',
                            '82px'
                        ],
                        [
                            "eid118",
                            "top",
                            11750,
                            250,
                            "linear",
                            "${picture_modern_fleet}",
                            '82px',
                            '280px'
                        ],
                        [
                            "eid130",
                            "left",
                            13000,
                            250,
                            "linear",
                            "${landing_dawn}",
                            '336px',
                            '-13px'
                        ],
                        [
                            "eid144",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${logo_95}",
                            '1',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            14500,
                            0,
                            "linear",
                            "${logo_95}",
                            '1',
                            '1'
                        ],
                        [
                            "eid143",
                            "opacity",
                            14750,
                            250,
                            "linear",
                            "${logo_95}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${picture_beginning}",
                            'none',
                            'block'
                        ],
                        [
                            "eid25",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${picture_beginning}",
                            'block',
                            'none'
                        ],
                        [
                            "eid117",
                            "left",
                            11750,
                            250,
                            "linear",
                            "${picture_modern_fleet}",
                            '-9px',
                            '337px'
                        ],
                        [
                            "eid24",
                            "top",
                            2250,
                            250,
                            "linear",
                            "${picture_beginning}",
                            '0px',
                            '-185px'
                        ],
                        [
                            "eid121",
                            "left",
                            11750,
                            250,
                            "linear",
                            "${text_care}",
                            '-336px',
                            '0px'
                        ],
                        [
                            "eid94",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${sym_efficient}",
                            'none',
                            'block'
                        ],
                        [
                            "eid104",
                            "display",
                            10374,
                            0,
                            "linear",
                            "${sym_efficient}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "top",
                            7000,
                            250,
                            "linear",
                            "${snow}",
                            '-282px',
                            '0px'
                        ],
                        [
                            "eid93",
                            "left",
                            9122,
                            128,
                            "linear",
                            "${work_efficient}",
                            '339px',
                            '-85px'
                        ],
                        [
                            "eid14",
                            "bottom",
                            1000,
                            500,
                            "linear",
                            "${text_beginning}",
                            '-95px',
                            '-10px'
                        ],
                        [
                            "eid85",
                            "left",
                            8049,
                            201,
                            "linear",
                            "${airport}",
                            '341px',
                            '-61px'
                        ],
                        [
                            "eid131",
                            "top",
                            13000,
                            250,
                            "linear",
                            "${landing_dawn}",
                            '280px',
                            '0px'
                        ],
                        [
                            "eid134",
                            "top",
                            14250,
                            250,
                            "linear",
                            "${landing_dawn}",
                            '0px',
                            '286px'
                        ],
                        [
                            "eid43",
                            "left",
                            2921,
                            250,
                            "linear",
                            "${wingtip}",
                            '-269px',
                            '0px'
                        ],
                        [
                            "eid62",
                            "left",
                            4750,
                            250,
                            "linear",
                            "${wingtip}",
                            '0px',
                            '-281px'
                        ],
                        [
                            "eid123",
                            "display",
                            11750,
                            0,
                            "linear",
                            "${text_care}",
                            'none',
                            'block'
                        ],
                        [
                            "eid126",
                            "display",
                            12938,
                            0,
                            "linear",
                            "${text_care}",
                            'block',
                            'none'
                        ],
                        [
                            "eid95",
                            "left",
                            9250,
                            250,
                            "linear",
                            "${sym_efficient}",
                            '-336px',
                            '0px'
                        ],
                        [
                            "eid96",
                            "display",
                            9122,
                            0,
                            "linear",
                            "${work_efficient}",
                            'none',
                            'block'
                        ],
                        [
                            "eid106",
                            "display",
                            10750,
                            0,
                            "linear",
                            "${work_efficient}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            8049,
                            0,
                            "linear",
                            "${sym_passengers}",
                            'none',
                            'block'
                        ],
                        [
                            "eid92",
                            "display",
                            9122,
                            0,
                            "linear",
                            "${sym_passengers}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${picture_beginning}",
                            '-344px',
                            '0px'
                        ],
                        [
                            "eid133",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${text_together}",
                            'none',
                            'block'
                        ],
                        [
                            "eid137",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${text_together}",
                            'block',
                            'none'
                        ],
                        [
                            "eid99",
                            "top",
                            9250,
                            0,
                            "linear",
                            "${eraser}",
                            '185px',
                            '185px'
                        ],
                        [
                            "eid68",
                            "top",
                            6000,
                            250,
                            "linear",
                            "${brazil}",
                            '-280px',
                            '0px'
                        ],
                        [
                            "eid69",
                            "top",
                            7000,
                            250,
                            "linear",
                            "${brazil}",
                            '0px',
                            '280px'
                        ],
                        [
                            "eid87",
                            "left",
                            8049,
                            201,
                            "linear",
                            "${sym_passengers}",
                            '-349px',
                            '0px'
                        ],
                        [
                            "eid84",
                            "display",
                            8049,
                            0,
                            "linear",
                            "${airport}",
                            'none',
                            'block'
                        ],
                        [
                            "eid107",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${airport}",
                            'block',
                            'none'
                        ],
                        [
                            "eid51",
                            "left",
                            2500,
                            3500,
                            "linear",
                            "${clouds}",
                            '-1120px',
                            '336px'
                        ],
                        [
                            "eid128",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${boy_dog}",
                            'block',
                            'none'
                        ],
                        [
                            "eid119",
                            "left",
                            11750,
                            250,
                            "linear",
                            "${boy_dog}",
                            '-369px',
                            '-8px'
                        ],
                        [
                            "eid127",
                            "left",
                            12875,
                            125,
                            "linear",
                            "${boy_dog}",
                            '-8px',
                            '-377px'
                        ],
                        [
                            "eid79",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${snow}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            8250,
                            0,
                            "linear",
                            "${snow}",
                            'block',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${picture_modern_fleet}",
                            'none',
                            'block'
                        ],
                        [
                            "eid120",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${picture_modern_fleet}",
                            'block',
                            'none'
                        ],
                        [
                            "eid129",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${landing_dawn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid136",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${landing_dawn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            0,
                            0,
                            "linear",
                            "${brazil}",
                            'none',
                            'none'
                        ],
                        [
                            "eid78",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${brazil}",
                            'none',
                            'block'
                        ],
                        [
                            "eid70",
                            "display",
                            7250,
                            0,
                            "linear",
                            "${brazil}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22",
                            "left",
                            2258,
                            242,
                            "linear",
                            "${eraser}",
                            '-345px',
                            '336px'
                        ],
                        [
                            "eid91",
                            "left",
                            9000,
                            250,
                            "linear",
                            "${eraser}",
                            '336px',
                            '-347px'
                        ],
                        [
                            "eid103",
                            "left",
                            10250,
                            250,
                            "linear",
                            "${eraser}",
                            '-347px',
                            '350px'
                        ],
                        [
                            "eid125",
                            "left",
                            12875,
                            125,
                            "linear",
                            "${eraser}",
                            '350px',
                            '-344px'
                        ],
                        [
                            "eid82",
                            "left",
                            8000,
                            250,
                            "linear",
                            "${snow}",
                            '-87px',
                            '-522px'
                        ],
                        [
                            "eid105",
                            "top",
                            10500,
                            250,
                            "linear",
                            "${work_efficient}",
                            '0px',
                            '-280px'
                        ],
                        [
                            "eid88",
                            "opacity",
                            3171,
                            0,
                            "linear",
                            "${sym_bringingworld}",
                            '0.80487804878049',
                            '0.80487804878049'
                        ],
                        [
                            "eid132",
                            "left",
                            13000,
                            250,
                            "linear",
                            "${text_together}",
                            '-359px',
                            '0px'
                        ],
                        [
                            "eid122",
                            "top",
                            11750,
                            250,
                            "linear",
                            "${text_care}",
                            '280px',
                            '0px'
                        ],
                        [
                            "eid124",
                            "top",
                            12750,
                            125,
                            "linear",
                            "${text_care}",
                            '0px',
                            '185px'
                        ],
                        [
                            "eid113",
                            "left",
                            10500,
                            250,
                            "linear",
                            "${text_innovation}",
                            '343px',
                            '0px'
                        ],
                        [
                            "eid114",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${text_innovation}",
                            'none',
                            'block'
                        ],
                        [
                            "eid116",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${text_innovation}",
                            'block',
                            'none'
                        ],
                        [
                            "eid135",
                            "top",
                            14250,
                            250,
                            "linear",
                            "${text_together}",
                            '0px',
                            '286px'
                        ],
                        [
                            "eid11",
                            "display",
                            1000,
                            0,
                            "easeInOutBounce",
                            "${text_beginning}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23",
                            "display",
                            2381,
                            0,
                            "easeInOutBounce",
                            "${text_beginning}",
                            'block',
                            'none'
                        ],
                        [
                            "eid72",
                            "display",
                            0,
                            0,
                            "linear",
                            "${clouds}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${clouds}",
                            'none',
                            'block'
                        ],
                        [
                            "eid66",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${clouds}",
                            'block',
                            'none'
                        ],
                        [
                            "eid48",
                            "left",
                            2921,
                            250,
                            "linear",
                            "${sym_bringingworld}",
                            '-347px',
                            '0px'
                        ],
                        [
                            "eid64",
                            "left",
                            5194,
                            585,
                            "linear",
                            "${sym_bringingworld}",
                            '0px',
                            '245px'
                        ],
                        [
                            "eid67",
                            "left",
                            5779,
                            221,
                            "linear",
                            "${sym_bringingworld}",
                            '245px',
                            '342px'
                        ]
                    ]
                }
            },
            "striving_world": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'bg_wingtips',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '411px', '172px', 'auto', 'auto'],
                            fill: ['rgba(52,182,212,1.00)']
                        },
                        {
                            rect: ['30px', '33px', '376px', '139px', 'auto', 'auto'],
                            font: ['Tahoma, Geneva, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            id: 'Text4',
                            text: 'KLM has been striving to bring you the world',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '411px', '172px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_bringingworld": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'bg_bringingworld',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '336px', '95px', 'auto', 'auto'],
                            fill: ['rgba(52,182,212,1)']
                        },
                        {
                            font: ['Tahoma, Geneva, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text5',
                            text: 'KLM has been striving to bring you the world',
                            align: 'left',
                            rect: ['30px', '16px', '306px', '95px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '336px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_passengers": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '-19px', '336px', '93px', 'auto', 'auto'],
                            fill: ['rgba(52,182,212,1)']
                        },
                        {
                            rect: ['27px', '-9px', '309px', '74px', 'auto', 'auto'],
                            font: ['Tahoma, Geneva, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            id: 'Text6',
                            text: 'Carrying fifty-five thousand passengers per day',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '336px', '74px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_efficient": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '336px', '95px', 'auto', 'auto'],
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(52,182,212,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['27px', '18px', '309px', '77px', 'auto', 'auto'],
                            id: 'Text8',
                            text: 'Constantly improving how we work',
                            align: 'left',
                            font: ['Tahoma, Geneva, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '336px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "text_innovation": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '336px', '95px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(52,182,212,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['33px', '13px', '303px', '82px', 'auto', 'auto'],
                            id: 'Text',
                            text: 'And constantly innovating our fleet',
                            align: 'left',
                            font: ['Tahoma, Geneva, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '336px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "text_care": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '336px', '95px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(52,182,212,1)']
                        },
                        {
                            type: 'text',
                            rect: ['28px', '31px', '302px', '64px', 'auto', 'auto'],
                            id: 'Text2',
                            text: 'because we care about you.',
                            align: 'left',
                            font: ['Tahoma, Geneva, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '336px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "text_together": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '336px', '95px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(52,182,212,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['29px', '9px', '307px', '86px', 'auto', 'auto'],
                            id: 'Text3',
                            text: 'And we will continue doing so, together, reaching for 100 years KLM',
                            align: 'left',
                            font: ['Tahoma, Geneva, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '336px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("klm-large-rectangle_edgeActions.js");
})("klm-large-rectangle");
