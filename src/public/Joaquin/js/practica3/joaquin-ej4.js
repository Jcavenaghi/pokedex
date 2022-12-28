function peticion(pagina) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = stateChangeHandler;
    xhttp.open("GET",pagina, true);
    xhttp.send();
}
function obtenerPersonajes() {
    for (let i = 0; i <= 34; i++) {
        peticion("https://rickandmortyapi.com/api/character/?page=" + i);
    }
}


function stateChangeHandler(){
    if (this.readyState === 4 && this.status === 200) {
        let respuesta = JSON.parse(this.responseText);          // Obtengo el objeto con datos de Rick and Morty
        var listUL = document.getElementById("lista");          // UL del HTML
        const fragment = document.createDocumentFragment();     // para mejorar codigo.
        for (const personaje of respuesta.results) {
            let listaNombres = document.createElement("li");            // elemento <li> </li> Para agregar el nombre personaje  
            listaNombres.textContent = personaje.name;
            fragment.appendChild(listaNombres);
        }
        listUL.appendChild(fragment);

        
    }
}
    //-----------------EJERCICIO 5-------------------
function borrarLista() {
    var listaBorrar = document.getElementById("lista");
    while (listaBorrar.firstChild) {
        listaBorrar.removeChild(listaBorrar.firstChild);
    }
    let cuerpo = document.getElementById("body");
     cuerpo.innerHTML += '<ul id="lista"></ul>';                      //creo una nueva lista mano para seguir mostrando cositas       
}
async function filtrarEspecies() {
    var especie = document.getElementById("select");  
    var datos = await fetch("https://rickandmortyapi.com/api/character/?species="+especie.value)        // guardo en datos la peticion de la URL (objeto JSON).
    .then(function(data){
        return data.json()})
    .catch(function(err){
        console.log(err)
    })
    borrarLista();
    var listUL = document.getElementById("lista");          // UL del HTML
    const fragment = document.createDocumentFragment();     // para mejorar codigo.
    for (const personaje of datos.results) {
        let listaNombres = document.createElement("li");            // elemento <li> </li> Para agregar el nombre personaje  
        listaNombres.textContent = personaje.name;
        fragment.appendChild(listaNombres);
    }
    for (let i = 2; i < datos.info.pages; i++) {
        datos = await fetch("https://rickandmortyapi.com/api/character/?species="+especie.value+"&page="+i)
         .then(function(data){
        return data.json()})
        .catch(function(err){
        console.log(err)
    })
        for (const personaje of datos.results) {
            let listaNombres = document.createElement("li");            // elemento <li> </li> Para agregar el nombre personaje  
            listaNombres.textContent = personaje.name;
            fragment.appendChild(listaNombres);
        }
    }
    listUL.appendChild(fragment);  
}
//------------EJERCICIO 6------------------------------
function mostrarPagina() {
    var pagina = document.getElementById("pag");
    borrarLista();  
    peticion("https://rickandmortyapi.com/api/character/?page="+pagina.value);
}