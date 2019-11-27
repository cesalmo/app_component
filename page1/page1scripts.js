//evento onclick en boton 1
document
    .querySelector("#boton1")
    .addEventListener("click", onButtonClickBoton1);

function onButtonClickBoton1() {
    
    // var sURL =
    //     "https://jsonplaceholder.typicode.com/comments?postId=" + input1.value;
    // fetch(sURL)
    //     .then(response => response.json())
    //     .then(function (json) {
    //         var lista1 = document.querySelector("#lista1");
    //         // setter
    //         lista1.datos_lista = json;
    //     });
    var input1 = document.getElementById("input1");

    var lista1 = document.querySelector("#lista1");
    // setter
    lista1.datos_lista = file_data;
    return;
// ***************************************************************************
    var sURL =
        "http://erpapptest.capsa.es:8000/zcam_rest_test/hello?sap-client=500?matnr=" + input1.value;
    

    var settings = {
        "async": true,
        //"crossDomain": true,
        // "url": "http://erpapptest.capsa.es:8000/zcam_rest_test/hello?sap-client=500?matnr=81075",
        "url": sURL,
        "method": "GET",
        "headers": {
            // "upgrade-insecure-requests": "1",
            // "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
            // "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "authorization": "Basic U09QT1JURUFCQVA6U29wb3J0ZTIwMTg=",
            // "cache-control": "no-cache",
            // "postman-token": "3b6b7337-b369-e574-45cd-a88d23f97717"
        }
    }

    $.ajax(settings).done(
        function (response) {     
            console.log(response);
            var lista1 = document.querySelector("#lista1");
            // setter
            lista1.datos_lista = response;
        });
}

// var Router = Vaadin.Router;
// const enlaceRouter = document.getElementById('enlaceRouter');
// const oRouter = new Router(enlaceRouter);
// oRouter.setRoutes([
//     { path: '/', component: 'comp-enlace1' },
//     { path: '/enlace2', component: 'comp-enlace2' },
// ]);


var file_data = 
[
    {
      "MANDT": "500",
      "LGNUM": "1R1",
      "LQNUM": 1749825,
      "LGTYP": "A02",
      "LGPLA": "P030802",
      "WERKS": "1001",
      "MATNR": "81075",
      "MAKTX": "PLANCHA SEPAR. 780x1135 COMBI",
      "VERME": 650,
      "MEINS": "ST",
      "VFDAT": "0000-00-00",
      "F1": ""
    },
    {
      "MANDT": "500",
      "LGNUM": "1R1",
      "LQNUM": 1749826,
      "LGTYP": "A02",
      "LGPLA": "P030802",
      "WERKS": "1001",
      "MATNR": "81075",
      "MAKTX": "PLANCHA SEPAR. 780x1135 COMBI",
      "VERME": 650,
      "MEINS": "ST",
      "VFDAT": "0000-00-00",
      "F1": ""
    },
    {
      "MANDT": "500",
      "LGNUM": "1R1",
      "LQNUM": 1749827,
      "LGTYP": "A02",
      "LGPLA": "P030802",
      "WERKS": "1001",
      "MATNR": "81075",
      "MAKTX": "PLANCHA SEPAR. 780x1135 COMBI",
      "VERME": 650,
      "MEINS": "ST",
      "VFDAT": "0000-00-00",
      "F1": ""
    },
    {
      "MANDT": "500",
      "LGNUM": "1R1",
      "LQNUM": 1749830,
      "LGTYP": "A02",
      "LGPLA": "P020702",
      "WERKS": "1001",
      "MATNR": "81075",
      "MAKTX": "PLANCHA SEPAR. 780x1135 COMBI",
      "VERME": 650,
      "MEINS": "ST",
      "VFDAT": "0000-00-00",
      "F1": ""
    },
    {
      "MANDT": "500",
      "LGNUM": "1R1",
      "LQNUM": 1748818,
      "LGTYP": "A02",
      "LGPLA": "P020201",
      "WERKS": "1001",
      "MATNR": "81075",
      "MAKTX": "PLANCHA SEPAR. 780x1135 COMBI",
      "VERME": 650,
      "MEINS": "ST",
      "VFDAT": "0000-00-00",
      "F1": ""
    },
    {
      "MANDT": "500",
      "LGNUM": "1R1",
      "LQNUM": 1748819,
      "LGTYP": "A02",
      "LGPLA": "P020201",
      "WERKS": "1001",
      "MATNR": "81075",
      "MAKTX": "PLANCHA SEPAR. 780x1135 COMBI",
      "VERME": 650,
      "MEINS": "ST",
      "VFDAT": "0000-00-00",
      "F1": ""
    },
    {
      "MANDT": "500",
      "LGNUM": "1R1",
      "LQNUM": 1748820,
      "LGTYP": "A02",
      "LGPLA": "P020201",
      "WERKS": "1001",
      "MATNR": "81075",
      "MAKTX": "PLANCHA SEPAR. 780x1135 COMBI",
      "VERME": 650,
      "MEINS": "ST",
      "VFDAT": "0000-00-00",
      "F1": ""
    },
    {
      "MANDT": "500",
      "LGNUM": "1R1",
      "LQNUM": 1750920,
      "LGTYP": "A02",
      "LGPLA": "P020702",
      "WERKS": "1001",
      "MATNR": "81075",
      "MAKTX": "PLANCHA SEPAR. 780x1135 COMBI",
      "VERME": 650,
      "MEINS": "ST",
      "VFDAT": "0000-00-00",
      "F1": ""
    },
    {
      "MANDT": "500",
      "LGNUM": "1R1",
      "LQNUM": 1750921,
      "LGTYP": "A02",
      "LGPLA": "P020702",
      "WERKS": "1001",
      "MATNR": "81075",
      "MAKTX": "PLANCHA SEPAR. 780x1135 COMBI",
      "VERME": 650,
      "MEINS": "ST",
      "VFDAT": "0000-00-00",
      "F1": ""
    },
    {
      "MANDT": "500",
      "LGNUM": "1R1",
      "LQNUM": 1750925,
      "LGTYP": "A05",
      "LGPLA": "ASUE",
      "WERKS": "1001",
      "MATNR": "81075",
      "MAKTX": "PLANCHA SEPAR. 780x1135 COMBI",
      "VERME": 280,
      "MEINS": "ST",
      "VFDAT": "0000-00-00",
      "F1": ""
    },
    {
      "MANDT": "500",
      "LGNUM": "1R1",
      "LQNUM": 1753635,
      "LGTYP": "922",
      "LGPLA": "CAMBIOEST",
      "WERKS": "1001",
      "MATNR": "81075",
      "MAKTX": "PLANCHA SEPAR. 780x1135 COMBI",
      "VERME": 650,
      "MEINS": "ST",
      "VFDAT": "0000-00-00",
      "F1": ""
    },
    {
      "MANDT": "500",
      "LGNUM": "1R1",
      "LQNUM": 10485,
      "LGTYP": "920",
      "LGPLA": "TRASPASO",
      "WERKS": "5001",
      "MATNR": "81075",
      "MAKTX": "PLANCHA SEPAR. 780x1135 COMBI",
      "VERME": 600,
      "MEINS": "ST",
      "VFDAT": "0000-00-00",
      "F1": ""
    },
    {
      "MANDT": "500",
      "LGNUM": "1R1",
      "LQNUM": 1751789,
      "LGTYP": "P01",
      "LGPLA": "ZUHT",
      "WERKS": "1001",
      "MATNR": "81075",
      "MAKTX": "PLANCHA SEPAR. 780x1135 COMBI",
      "VERME": 250,
      "MEINS": "ST",
      "VFDAT": "0000-00-00",
      "F1": ""
    },
    {
      "MANDT": "500",
      "LGNUM": "1R1",
      "LQNUM": 1753331,
      "LGTYP": "P01",
      "LGPLA": "ZUHT",
      "WERKS": "1001",
      "MATNR": "81075",
      "MAKTX": "PLANCHA SEPAR. 780x1135 COMBI",
      "VERME": 389,
      "MEINS": "ST",
      "VFDAT": "0000-00-00",
      "F1": ""
    },
    {
      "MANDT": "500",
      "LGNUM": "1R1",
      "LQNUM": 1752270,
      "LGTYP": "P01",
      "LGPLA": "ZUHT",
      "WERKS": "1001",
      "MATNR": "81075",
      "MAKTX": "PLANCHA SEPAR. 780x1135 COMBI",
      "VERME": 336,
      "MEINS": "ST",
      "VFDAT": "0000-00-00",
      "F1": ""
    },
    {
      "MANDT": "500",
      "LGNUM": "1R1",
      "LQNUM": 1744593,
      "LGTYP": "P01",
      "LGPLA": "ZUHT",
      "WERKS": "1001",
      "MATNR": "81075",
      "MAKTX": "PLANCHA SEPAR. 780x1135 COMBI",
      "VERME": 1191,
      "MEINS": "ST",
      "VFDAT": "0000-00-00",
      "F1": ""
    }
  ];