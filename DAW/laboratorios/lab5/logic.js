
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
function verificar(){
    let arguments = new Array();
    pass = document.getElementById("contra").value;
    repeat = document.getElementById("contra2").value;
    if(pass != repeat){
        coincide = false;
        arguments.push("las contraseñas no coinciden");
    }
    if(pass.length < 8){
        corta = true;
        arguments.push("demasiado corta");
    }else{
        corta = false;
    }
    comment(arguments);
    if(coincide && !corta){
        noArgs = true;
    }else{
        noArgs = false;
    }
    for(i = 0;i<pass.length;i++){
        if((pass.charCodeAt(i) >= 33 && pass.charCodeAt(i) <= 47) || (pass.charCodeAt(i) >= 59 && pass.charCodeAt(i) <= 64) || (pass.charCodeAt(i) >= 91 && pass.charCodeAt(i) <= 96)){
            specialChar = true;
        }
    }
    if(noArgs){
        verificacionFinal();
    }
}
//revisar...
function verificacionFinal(){
    
}
function comment(args){
    let toPrint = new Array();
    for(i = 0;i<args.length;i++){
        if(i == args.length-1){
            toPrint[i] = args[i];
        }else{
           toPrint[i] = args[i] + "/"; 
        }
        
    }
    document.getElementById("aqui").innerHTML = "";
    for(i = 0;i<args.length;i++){
         document.getElementById("aqui").innerHTML += toPrint[i];
    }
    
   
   
}