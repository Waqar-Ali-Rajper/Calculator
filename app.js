getinp = document.getElementById('inp')

function clicked(e){
    document.getElementById('inp').value += e
}
function equal(){
    getinp.value = eval(getinp.value)
}
function cled(){
    getinp.value = ''
}
function cler(){
  getinp.value = getinp.value.slice(0, -1);
}


const calculator = document.getElementById("calculator");

window.addEventListener("resize", function() {
  calculator.style.width = "100%";
  calculator.style.height = "100%";
  calculator.classList.add("responsive");
});

window.addEventListener("load", function() {
  calculator.style.width = "300px";
  calculator.style.height = "400px";
  calculator.classList.remove("responsive");
});