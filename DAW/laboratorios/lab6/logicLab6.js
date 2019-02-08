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

function init(){
    
}
let cont3 = 1;
let cont2 = 1;
let cont = 1;
document.getElementById("esconder").onclick = hideElement;
document.getElementById("tutorial1").onmouseover = changeLetter;
document.getElementById("tutorial1").onmouseout = changeLetter;
document.getElementById("masInfo").onmouseover = masInfo;
document.getElementById("masInfo").onmouseout = masInfo;