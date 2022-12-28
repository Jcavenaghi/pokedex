function stateChangeHandler(){
    console.log('Ready state: ' + this.readyState
    + '. Status: ' + this.status + ' ' + this.statusText
    + '. Response: ' + this.responseText);
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = stateChangeHandler;
xhttp.open("GET", "https://aws.random.cat/meow", true);
xhttp.send();