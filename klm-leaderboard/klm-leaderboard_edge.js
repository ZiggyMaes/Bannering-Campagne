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
                            rect: ['0px', '0px', '728px', '91px', 'auto', 'auto'],
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
                            id: 'picture_beginning',
                            display: 'none',
                            type: 'image',
                            rect: ['-344px', '0px', '163px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"beginning.png",'0px','0px']
                        },
                        {
                            id: 'text_beginning',
                            display: 'none',
                            type: 'text',
                            rect: ['345px', 'auto', '313px', '90px', 'auto', '-95px'],
                            opacity: '1',
                            text: "From the beginning of our journey in 1919",
                            align: "left",
                            font: ['Tahoma, Geneva, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'clouds',
                            display: 'block',
                            type: 'image',
                            rect: ['94px', '0px', '1455px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"clouds.png",'0px','0px']
                        },
                        {
                            id: 'wingtip',
                            display: 'none',
                            type: 'image',
                            rect: ['-269px', '38px', '144px', '130px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"wingtip.png",'0px','0px']
                        },
                        {
                            id: 'sym_bringingworld',
                            symbolName: 'sym_bringingworld',
                            display: 'none',
                            type: 'rect',
                            rect: ['345px', '-111px', '336', '95', 'auto', 'auto'],
                            opacity: '0.80487804878049',
                            transform: [[],[],[],['1','0.95789']]
                        },
                        {
                            id: 'brazil',
                            display: 'none',
                            type: 'image',
                            rect: ['122px', '-113px', '163px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"brazil.jpg",'0px','0px']
                        },
                        {
                            id: 'snow',
                            display: 'none',
                            type: 'image',
                            rect: ['355px', '90px', '166px', '91px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"snow.jpg",'0px','0px']
                        },
                        {
                            id: 'klm-japan',
                            display: 'none',
                            type: 'image',
                            rect: ['590px', '-90px', '138px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"klm-japan.jpg",'0px','0px']
                        },
                        {
                            id: 'airport',
                            display: 'none',
                            type: 'image',
                            rect: ['458px', '91px', '198px', '121px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"airport.jpg",'0px','0px']
                        },
                        {
                            id: 'sym_passengers',
                            symbolName: 'sym_passengers',
                            display: 'none',
                            type: 'rect',
                            rect: ['101px', '18px', '336', '74', 'auto', 'auto'],
                            opacity: '0.80487792908661'
                        },
                        {
                            id: 'work_efficient',
                            display: 'none',
                            type: 'image',
                            rect: ['152px', '-1px', '166px', '91px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"work_efficient.png",'0px','0px']
                        },
                        {
                            id: 'sym_efficient',
                            symbolName: 'sym_efficient',
                            display: 'none',
                            type: 'rect',
                            rect: ['726px', '-2px', '336', '95', 'auto', 'auto'],
                            opacity: '0.80487804878049',
                            transform: [[],[],[],['0.94737','0.94737']]
                        },
                        {
                            id: 'picture_modern_fleet',
                            display: 'none',
                            type: 'image',
                            rect: ['425px', '95px', '266px', '125px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"picture_modern_fleet.jpg",'0px','0px']
                        },
                        {
                            id: 'text_innovation',
                            symbolName: 'text_innovation',
                            display: 'none',
                            type: 'rect',
                            rect: ['727px', '-2px', '336', '95', 'auto', 'auto'],
                            transform: [[],[],[],['0.94737','0.94737']]
                        },
                        {
                            id: 'boy_dog',
                            display: 'none',
                            type: 'image',
                            rect: ['736px', '-29px', '157px', '119px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"boy_dog.jpg",'0px','0px']
                        },
                        {
                            id: 'landing_dawn',
                            display: 'none',
                            type: 'image',
                            rect: ['450px', '0px', '278px', '155px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"landing_dawn.jpg",'0px','0px']
                        },
                        {
                            id: 'text_care',
                            symbolName: 'text_care',
                            display: 'none',
                            type: 'rect',
                            rect: ['97px', '117px', '336', '95', 'auto', 'auto'],
                            opacity: '0.79674796747967',
                            transform: [[],[],[],['0.94737','0.94737']]
                        },
                        {
                            id: 'eraser',
                            type: 'rect',
                            rect: ['737px', '0px', '336px', '91px', 'auto', 'auto'],
                            fill: ["rgba(0,130,160,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'text_together',
                            symbolName: 'text_together',
                            display: 'none',
                            type: 'rect',
                            rect: ['92px', '-2px', '336', '95', 'auto', 'auto'],
                            opacity: '0.80487804878049',
                            transform: [[],[],[],['0.94737','0.94737']]
                        },
                        {
                            id: 'logo_95',
                            display: 'block',
                            type: 'image',
                            rect: ['317px', '0px', '94px', '91px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"95_years.gif",'0px','0px']
                        },
                        {
                            id: 'bg_music2',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"bg_music.mp3"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '728px', '90px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 15000,
                    autoPlay: true,
                    data: [
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
                            3421,
                            0,
                            "linear",
                            "${sym_bringingworld}",
                            'none',
                            'block'
                        ],
                        [
                            "eid162",
                            "display",
                            5000,
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
                            '0px'
                        ],
                        [
                            "eid52",
                            "top",
                            3250,
                            250,
                            "linear",
                            "${wingtip}",
                            '0px',
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
                            '0px'
                        ],
                        [
                            "eid157",
                            "top",
                            4250,
                            250,
                            "linear",
                            "${wingtip}",
                            '0px',
                            '26px'
                        ],
                        [
                            "eid158",
                            "top",
                            4500,
                            250,
                            "linear",
                            "${wingtip}",
                            '26px',
                            '0px'
                        ],
                        [
                            "eid58",
                            "top",
                            4750,
                            250,
                            "linear",
                            "${wingtip}",
                            '0px',
                            '38px'
                        ],
                        [
                            "eid166",
                            "top",
                            5250,
                            250,
                            "linear",
                            "${snow}",
                            '90px',
                            '0px'
                        ],
                        [
                            "eid208",
                            "top",
                            11500,
                            250,
                            "linear",
                            "${text_innovation}",
                            '-2px',
                            '-99px'
                        ],
                        [
                            "eid115",
                            "top",
                            11750,
                            250,
                            "linear",
                            "${text_innovation}",
                            '-99px',
                            '-95px'
                        ],
                        [
                            "eid109",
                            "top",
                            10250,
                            250,
                            "linear",
                            "${picture_modern_fleet}",
                            '95px',
                            '-35px'
                        ],
                        [
                            "eid210",
                            "top",
                            11500,
                            250,
                            "linear",
                            "${picture_modern_fleet}",
                            '-35px',
                            '102px'
                        ],
                        [
                            "eid118",
                            "top",
                            11750,
                            250,
                            "linear",
                            "${picture_modern_fleet}",
                            '102px',
                            '280px'
                        ],
                        [
                            "eid189",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${work_efficient}",
                            'none',
                            'block'
                        ],
                        [
                            "eid205",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${work_efficient}",
                            'block',
                            'none'
                        ],
                        [
                            "eid186",
                            "left",
                            8250,
                            250,
                            "linear",
                            "${airport}",
                            '458px',
                            '1092px'
                        ],
                        [
                            "eid130",
                            "left",
                            13250,
                            250,
                            "linear",
                            "${landing_dawn}",
                            '336px',
                            '450px'
                        ],
                        [
                            "eid184",
                            "top",
                            7000,
                            250,
                            "linear",
                            "${airport}",
                            '91px',
                            '0px'
                        ],
                        [
                            "eid168",
                            "left",
                            5500,
                            250,
                            "linear",
                            "${klm-japan}",
                            '590px',
                            '589px'
                        ],
                        [
                            "eid169",
                            "top",
                            5500,
                            250,
                            "linear",
                            "${klm-japan}",
                            '-90px',
                            '0px'
                        ],
                        [
                            "eid164",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${clouds}",
                            'none',
                            'block'
                        ],
                        [
                            "eid163",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${clouds}",
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
                            '425px',
                            '337px'
                        ],
                        [
                            "eid121",
                            "left",
                            11750,
                            250,
                            "linear",
                            "${text_care}",
                            '-74px',
                            '97px'
                        ],
                        [
                            "eid219",
                            "left",
                            13000,
                            250,
                            "linear",
                            "${text_care}",
                            '97px',
                            '727px'
                        ],
                        [
                            "eid43",
                            "left",
                            2921,
                            250,
                            "linear",
                            "${wingtip}",
                            '-269px',
                            '94px'
                        ],
                        [
                            "eid62",
                            "left",
                            4750,
                            250,
                            "linear",
                            "${wingtip}",
                            '94px',
                            '-281px'
                        ],
                        [
                            "eid167",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${klm-japan}",
                            'none',
                            'block'
                        ],
                        [
                            "eid180",
                            "display",
                            6829,
                            0,
                            "linear",
                            "${klm-japan}",
                            'block',
                            'none'
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
                            2500,
                            0,
                            "easeInOutBounce",
                            "${text_beginning}",
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
                            '-2px',
                            '286px'
                        ],
                        [
                            "eid131",
                            "top",
                            13250,
                            250,
                            "linear",
                            "${landing_dawn}",
                            '280px',
                            '-47px'
                        ],
                        [
                            "eid134",
                            "top",
                            14250,
                            250,
                            "linear",
                            "${landing_dawn}",
                            '-47px',
                            '286px'
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
                            "eid220",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${text_care}",
                            'block',
                            'none'
                        ],
                        [
                            "eid197",
                            "left",
                            8500,
                            250,
                            "linear",
                            "${sym_efficient}",
                            '726px',
                            '371px'
                        ],
                        [
                            "eid145",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${logo_95}",
                            '317px',
                            '0px'
                        ],
                        [
                            "eid223",
                            "left",
                            14500,
                            500,
                            "linear",
                            "${logo_95}",
                            '0px',
                            '317px'
                        ],
                        [
                            "eid122",
                            "top",
                            11750,
                            250,
                            "linear",
                            "${text_care}",
                            '117px',
                            '-1px'
                        ],
                        [
                            "eid16",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${picture_beginning}",
                            '-344px',
                            '104px'
                        ],
                        [
                            "eid133",
                            "display",
                            13250,
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
                            "eid146",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${eraser}",
                            '0px',
                            '104px'
                        ],
                        [
                            "eid175",
                            "top",
                            6750,
                            0,
                            "linear",
                            "${eraser}",
                            '104px',
                            '0px'
                        ],
                        [
                            "eid199",
                            "top",
                            7000,
                            0,
                            "linear",
                            "${eraser}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid200",
                            "top",
                            7250,
                            0,
                            "linear",
                            "${eraser}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid68",
                            "top",
                            5000,
                            250,
                            "linear",
                            "${brazil}",
                            '-113px',
                            '0px'
                        ],
                        [
                            "eid87",
                            "left",
                            7000,
                            201,
                            "linear",
                            "${sym_passengers}",
                            '-336px',
                            '101px'
                        ],
                        [
                            "eid185",
                            "left",
                            8250,
                            250,
                            "linear",
                            "${sym_passengers}",
                            '101px',
                            '735px'
                        ],
                        [
                            "eid170",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${airport}",
                            'none',
                            'block'
                        ],
                        [
                            "eid188",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${airport}",
                            'block',
                            'none'
                        ],
                        [
                            "eid107",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${airport}",
                            'none',
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
                            5000,
                            0,
                            "linear",
                            "${brazil}",
                            'none',
                            'block'
                        ],
                        [
                            "eid182",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${brazil}",
                            'block',
                            'none'
                        ],
                        [
                            "eid152",
                            "left",
                            2500,
                            2694,
                            "linear",
                            "${clouds}",
                            '-1455px',
                            '94px'
                        ],
                        [
                            "eid216",
                            "left",
                            11750,
                            250,
                            "linear",
                            "${boy_dog}",
                            '736px',
                            '501px'
                        ],
                        [
                            "eid165",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${snow}",
                            'none',
                            'block'
                        ],
                        [
                            "eid181",
                            "display",
                            6909,
                            0,
                            "linear",
                            "${snow}",
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
                            '735px',
                            '336px'
                        ],
                        [
                            "eid176",
                            "left",
                            6750,
                            250,
                            "linear",
                            "${eraser}",
                            '735px',
                            '737px'
                        ],
                        [
                            "eid202",
                            "left",
                            9750,
                            250,
                            "linear",
                            "${eraser}",
                            '737px',
                            '95px'
                        ],
                        [
                            "eid206",
                            "left",
                            10000,
                            250,
                            "linear",
                            "${eraser}",
                            '95px',
                            '736px'
                        ],
                        [
                            "eid150",
                            "display",
                            0,
                            0,
                            "linear",
                            "${boy_dog}",
                            'none',
                            'none'
                        ],
                        [
                            "eid212",
                            "display",
                            11750,
                            0,
                            "linear",
                            "${boy_dog}",
                            'none',
                            'block'
                        ],
                        [
                            "eid221",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${boy_dog}",
                            'block',
                            'none'
                        ],
                        [
                            "eid222",
                            "display",
                            13250,
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
                            "eid108",
                            "display",
                            10250,
                            0,
                            "linear",
                            "${picture_modern_fleet}",
                            'none',
                            'block'
                        ],
                        [
                            "eid211",
                            "display",
                            11750,
                            0,
                            "linear",
                            "${picture_modern_fleet}",
                            'block',
                            'none'
                        ],
                        [
                            "eid120",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${picture_modern_fleet}",
                            'none',
                            'none'
                        ],
                        [
                            "eid160",
                            "top",
                            3421,
                            329,
                            "linear",
                            "${sym_bringingworld}",
                            '91px',
                            '-2px'
                        ],
                        [
                            "eid161",
                            "top",
                            4750,
                            250,
                            "linear",
                            "${sym_bringingworld}",
                            '-2px',
                            '-111px'
                        ],
                        [
                            "eid190",
                            "top",
                            8500,
                            250,
                            "linear",
                            "${work_efficient}",
                            '98px',
                            '-1px'
                        ],
                        [
                            "eid86",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${sym_passengers}",
                            'none',
                            'block'
                        ],
                        [
                            "eid187",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${sym_passengers}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "display",
                            9122,
                            0,
                            "linear",
                            "${sym_passengers}",
                            'none',
                            'none'
                        ],
                        [
                            "eid132",
                            "left",
                            13250,
                            250,
                            "linear",
                            "${text_together}",
                            '-359px',
                            '92px'
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
                            "eid113",
                            "left",
                            10250,
                            250,
                            "linear",
                            "${text_innovation}",
                            '727px',
                            '92px'
                        ],
                        [
                            "eid114",
                            "display",
                            10250,
                            0,
                            "linear",
                            "${text_innovation}",
                            'none',
                            'block'
                        ],
                        [
                            "eid209",
                            "display",
                            11750,
                            0,
                            "linear",
                            "${text_innovation}",
                            'block',
                            'none'
                        ],
                        [
                            "eid116",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${text_innovation}",
                            'none',
                            'none'
                        ],
                        [
                            "eid218",
                            "top",
                            13000,
                            250,
                            "linear",
                            "${boy_dog}",
                            '-29px',
                            '91px'
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
                            "eid194",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${sym_efficient}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${sym_efficient}",
                            'block',
                            'block'
                        ],
                        [
                            "eid204",
                            "display",
                            9881,
                            0,
                            "linear",
                            "${sym_efficient}",
                            'block',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            10374,
                            0,
                            "linear",
                            "${sym_efficient}",
                            'none',
                            'none'
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
                            rect: ['0px', '0px', '411px', '172px', 'auto', 'auto'],
                            id: 'bg_wingtips',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
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
                            rect: ['0px', '0px', '336px', '95px', 'auto', 'auto'],
                            id: 'bg_bringingworld',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
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
                            rect: ['0px', '-19px', '336px', '93px', 'auto', 'auto'],
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
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
                            type: 'rect',
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '336px', '95px', 'auto', 'auto'],
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
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '336px', '95px', 'auto', 'auto'],
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
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '336px', '95px', 'auto', 'auto'],
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
                            rect: ['29px', '9px', '307px', '86px', 'auto', 'auto'],
                            font: ['Tahoma, Geneva, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            id: 'Text3',
                            text: 'And we will continue doing so, together, reaching for 100 years KLM',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '336px', '95px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("klm-leaderboard_edgeActions.js");
})("klm-leaderboard");
