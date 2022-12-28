function stateChangeHandler(){
   if (this.readyState == 4 && this.status == 200) {
       let URL = JSON.parse(this.responseText).file
       img = document.getElementById("imagen");
       img.setAttribute("src", URL);

   }
    console.log('Ready state: ' + this.readyState
    + '. Status: ' + this.status + ' ' + this.statusText
    + '. Response: ' + this.responseText);
   }
