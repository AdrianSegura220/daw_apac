
let i = 0;
let corta, coincide;
coincide = true;
corta = true;
let repeticion, consecutivo, noArgs, specialChar, mayus;
repeticion = false;
consecutivo = false;
noArgs = false;
specialChar = false;
mayus = false;
charE = false;
mayuS = false;
cantidadInicialS = 999;
cantidadInicialM = 999;
function verificar(){
    let arguments = new Array();
    pass = document.getElementById("contra").value;
    repeat = document.getElementById("contra2").value;
   
    if(pass != repeat){
        coincide = false;
        arguments.push("las contraseñas no coinciden");
    }else{
        coincide = true;
    }
    if(pass.length < 8){
        corta = true;
        arguments.push("demasiado corta");
    }else{
        corta = false;
    }
    if(coincide && !corta){
        noArgs = true;
    }else{
        noArgs = false;
    }
    
    if(noArgs){
        document.getElementById("contra").style.backgroundColor = "green";
        document.getElementById("contra2").style.backgroundColor = "green";
    }else{
        document.getElementById("contra").style.backgroundColor = "white";
        document.getElementById("contra2").style.backgroundColor = "white";
    }
    comment(arguments);
    
}
//revisar...
function verificacionFinal(){
    
}
function comment(args){
    for(i = 0;i<pass.length;i++){
        if((pass.charCodeAt(i)>=33 && pass.charCodeAt(i) <= 47) ||(pass.charCodeAt(i)>=58 && pass.charCodeAt(i) <= 64) || (pass.charCodeAt(i) >=91 && pass.charCodeAt(i) <= 96)){
            specialChar = true;
            break;
        }
        
    }
    for(i = 0;i<pass.length;i++){
        if(pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90){
            mayus = true;
            break;
        }
        
    }
    if(!mayus){
        args.push("hace falta mayuscula");
    }
    if(!specialChar){
        args.push("hace falta caracter especial");
    }
    mayus = false;
    specialChar = false;
    let toPrint = new Array();
    for(i = 0;i<args.length;i++){
        if(i == args.length-1){
            toPrint[i] = args[i];
        }else{
           toPrint[i] = args[i] + " / "; 
        }
        
    }
    document.getElementById("aqui").innerHTML = "";
    for(i = 0;i<args.length;i++){
         document.getElementById("aqui").innerHTML += toPrint[i];
        document.getElementById("aqui").style.backgroundColor = "rgba(226, 176, 19, 1)";
    }
    
   
   
}
function comprar(articulo){
    switch(articulo){
        case "samsung":
            let num = document.getElementById("numSamsung").value;
            if((cantidadInicialS - num)<0){
                
            }else{
                cantidadInicialS -= num;
                console.log(cantidadInicialS);
            }
        break;
            
        case "macbook":
            let num2 = document.getElementById("numMacbook").value;
            if((cantidadInicialM - num2)<0){
                
            }else{
                cantidadInicialM -= num2;
                console.log(cantidadInicialM);
            }
        break;
    }
}
document.getElementById("botonSamsung").onclick = samsung;
document.getElementById("botonMacbook").onclick = macbook;
function samsung(){
    comprar("samsung");
}
function macbook(){
    comprar("macbook");
}