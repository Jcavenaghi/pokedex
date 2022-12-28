function stateChangeHandler(){
    console.log('Ready state: ' + this.readyState
    + '. Status: ' + this.status + ' ' + this.statusText
    + '. Response: ' + this.responseText);
}

var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://aws.random.cat/meow", false);
xhttp.send();
let ej3 = JSON.parse(xhttp.responseText)
document.getElementById("imagen").src = ej3["file"]