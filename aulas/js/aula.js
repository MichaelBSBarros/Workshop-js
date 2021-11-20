let app = document.querySelector("#app");
app.innerHTML = "<button id='enviar'>enviar</button>";
let myButton = document.querySelector("#enviar");
myButton.addEventListener("click", ()=> myButton.style = "background:red");
console.log(myButton);