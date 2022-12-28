function ej5(especie){
    const lista= document.getElementById("lista");
    let url = 'https://rickandmortyapi.com/api/character/?species=${especie}'

    var xhttp = new XMLHttpRequest()
    xhttp.open("GET", url)
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