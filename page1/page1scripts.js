//evento onclick en boton 1
document
    .querySelector("#boton1")
    .addEventListener("click", onButtonClickBoton1);

function onButtonClickBoton1() {
    var input1 = document.querySelector("#input1");
    var sURL =
        "https://jsonplaceholder.typicode.com/comments?postId=" + input1.value;
    fetch(sURL)
        .then(response => response.json())
        .then(function (json) {
            var lista1 = document.querySelector("#lista1");
            // setter
            lista1.datos_lista = json;
        });
}

// var Router = Vaadin.Router;
// const enlaceRouter = document.getElementById('enlaceRouter');
// const oRouter = new Router(enlaceRouter);
// oRouter.setRoutes([
//     {path: '/', component: 'comp-enlace1'},
//     {path: '/enlace2', component: 'comp-enlace2'},
//   ]);
