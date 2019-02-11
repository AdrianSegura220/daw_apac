function changeLetter(){
    cont++;
    if(cont % 2 == 0){
        document.getElementById("tutorial1").style.backgroundColor = "lightyellow";
    }else{
        document.getElementById("tutorial1").style.backgroundColor = "aliceblue";
    }
    
}
function hideElement(){
    if(cont2 % 2 != 0){
        cont2++;
        document.getElementById("tutorial1").style.visibility = "hidden";
        document.getElementById("esconder").innerHTML = "Presiona para mostrar título...";
    }else{
        cont2++;
      document.getElementById("tutorial1").style.visibility = "visible";  
        document.getElementById("esconder").innerHTML = "Presiona para esconder título...";
    }
    
}
function masInfo(){
    cont3 ++;
    if(cont3 % 2 == 0){
        document.getElementById("hide").style.visibility = "visible";
    }else{
        document.getElementById("hide").style.visibility = "hidden";        
    }
    
    
}

function init(event){
    console.log("x: "+ event.pageX);
    console.log("y: "+ event.pageY);
}
function cambioLetra(){
    cont4++;
    if(cont3 % 2 == 0){
        document.getElementById("hide").style.visibility = "visible";
    }else{
        document.getElementById("hide").style.visibility = "hidden";        
    }
}
let cont4 = 1;
let cont3 = 1;
let cont2 = 1;
let cont = 1;
let awayFK = false;
function afk(){
    
    awayFK = confirm("¿Sigues ahí?");
    setTimeout(confirmar(),10000);
}
function confirmar(){
    if(!awayFK){
        alert("Al parecer no sigues ahí..."+'<br>'+"La utilidad de esto sería por ejemplo para una aplicación de streaming de video. De esta manera no se utilizarían recursos en vano. Por ejemplo Netflix después de detectar algún patrón fuera de lo habitual en una sesión. Por ejemplo deteniendo el stream y poniendo una pantalla negra o algo por el estilo.");
    }
}
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
document.getElementById("esconder").onclick = hideElement;
document.getElementById("tutorial1").onmouseover = changeLetter;
document.getElementById("tutorial1").onmouseout = changeLetter;
document.getElementById("masInfo").onmouseover = masInfo;
document.getElementById("masInfo").onmouseout = masInfo;
document.getElementById("letterChange").onmouseover = cambioLetra;
document.getElementById("letterChange").onmouseout = cambioLetra;
setInterval(afk,30000);