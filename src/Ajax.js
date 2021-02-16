function ajax(metodo,datos){ //que nos retorne una promesa con los datos, si no le pasamos nada va a hacer un GET
    var configuracion = !metodo ?  null : {
        method : metodo,
        body : JSON.stringify(datos),
        headers : {
            "Content-type" : "application/json"
        }
    };
    return fetch("http://localhost:8888/api_todo", configuracion)
    .then(respuesta => respuesta.json());
}
export default ajax;
