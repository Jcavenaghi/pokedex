document.body.onload= ej4;

function ej4(){
    const lista= document.getElementById("lista");
    let url = 'https://rickandmortyapi.com/api/character';

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url);
    xhttp.send();

    xhttp.onreadystatechange= function(){
        if(this.status == 200 && this.readyState == 4){//una vez que se haya recibido la informacion del server
            let datos = JSON.parse(xhttp.responseText);
            datos["results"].forEach(item => {
                const li= document.createElement("li");
                li.textContent= item.name;
                lista.appendChild(li);
            });
        if (datos["info"].next != null){ //quiere decir que hay una pagina siguiente
            xhttp.open("GET", datos["info"].next);
            xhttp.send();
        }
        }
    }
}

function Borrar(){
    let listaEJ5 = document.getElementById('lista');
    while (listaEJ5.firstChild) // MIENTRAS HAYA UN ELEMENTO EN LA LISTA
        listaEJ5.removeChild(listaEJ5.lastChild);
}

function ejercicio5(i){
    Borrar()

    const resultado = document.getElementById('lista');
            
    let url =`https://rickandmortyapi.com/api/character?species=${i}`; //no pude hacerlo con el species=(varespecie)
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(xhttp.responseText);
            datos['results'].forEach((item) => {
                   const li = document.createElement("li");
                   li.textContent = item.name+", "+item.species;
                   resultado.appendChild(li);
            });
            if (datos['info'].next != null){
                xhttp.open("GET",datos['info'].next);
                xhttp.send(); 
            }
        }
        
    }
}

function ejercicio6(i){
    Borrar();

    const lista= document.getElementById("lista");
    let url = `https://rickandmortyapi.com/api/character?page=${i}`;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url);
    xhttp.send();

    xhttp.onreadystatechange= function(){
        if(this.status == 200 && this.readyState == 4 ){//una vez que se haya recibido la informacion del server
            let datos = JSON.parse(xhttp.responseText);
            datos["results"].forEach(item => {
                const li= document.createElement("li");
                li.textContent= item.name;
                lista.appendChild(li);
            });
        }
    }
}