
let i = 0;
let corta, coincide;
coincide = true;
corta = true;
let repeticion, consecutivo, noArgs, specialChar, mayus, sms, mb;
repeticion = false;
consecutivo = false;
noArgs = false;
specialChar = false;
sms = false;
mb = false;
mayus = false;
charE = false;
mayuS = false;
lastS = 0;
lastM = 0;
lastE = 0;
precioS = 10000;
precioM = 20000;
precioE = 3000;
cantidadInicialS = 999;
cantidadInicialM = 999;
cantidadInicialE = 999;
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
            
            if(!((cantidadInicialS - num)<0)){
                if(lastS != num){
                    cantidadInicialS = 999;
                    cantidadInicialS -= num;
                    console.log(cantidadInicialS);
                }else{
                    cantidadInicialS -= num;
                    console.log(cantidadInicialS);
                }
            }
            lastS = num;
        break;
            
        case "macbook":
            let num2 = document.getElementById("numMacbook").value;
            
            if(!((cantidadInicialM - num2)<0)){
                if(lastM != num2){
                    cantidadInicialM = 999;
                    cantidadInicialM -= num2;
                    console.log(cantidadInicialM);
                }else{
                    cantidadInicialM -= num2;
                    console.log(cantidadInicialM);
                }
            }
            lastM = num2;
        break;
            
        case "ear":
            let num3 = document.getElementById("numEar").value;
            
            if(!((cantidadInicialE - num3)<0)){
                if(lastE != num3){
                    cantidadInicialE = 999;
                    cantidadInicialE -= num3;
                    console.log(cantidadInicialE);
                }else{
                    cantidadInicialE -= num3;
                    console.log(cantidadInicialE);
                }
            }
            lastE = num3;
        break;
    }
    imprimirRestantes();
    imprimirListaFinal();
}

document.getElementById("botonSamsung").onclick = samsung;
document.getElementById("botonMacbook").onclick = macbook;
document.getElementById("botonEar").onclick = ear;
document.getElementById("calcularT").onclick = areaT;

function areaT(){
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    let nombre = document.getElementById("nombre").value;
    
            let area = (base*altura)/2;
            alert(nombre+", el área de tu triángulo es = "+area);
}

function samsung(){
    comprar("samsung");
    
}

function macbook(){
    comprar("macbook");
}

function ear(){
    comprar("ear");
}
function imprimirRestantes(){
    document.getElementById("disponibleS").innerHTML = '<p>'+ cantidadInicialS+'</p>';
    document.getElementById("disponibleM").innerHTML = '<p>'+ cantidadInicialM+'</p>';
    document.getElementById("disponibleE").innerHTML = '<p>'+ cantidadInicialE+'</p>';
}

function imprimirListaFinal(){
    let totalS, totalM, totalE, total, s, m, e;
    s = m = e = false;
    totalS = totalM = totalE = total = 0;
    if(cantidadInicialS < 999){
        totalS = 999-cantidadInicialS;
        total += totalS*precioS;
    }
    if(cantidadInicialM < 999){
        totalM = 999-cantidadInicialM;
        total += totalM*precioM;
        
    }
    if(cantidadInicialE < 999){
        totalE = 999-cantidadInicialE;
        total += totalE*precioE;
    }
    if(totalS>0)
        s = true;
    
    if(totalM > 0)
        m = true;
    
    if(totalE > 0)
        e = true;
    
    if(s && m && e){
        document.getElementById("desgloce").innerHTML = 
        '<p>'+' ('+totalS+')'+' Tel. Samsung Galaxy Note 8 = $'+totalS*precioS+ ' pesos.'+'</p>'+'<br>'+'+'+'<br>'
        +'<p>'+' ('+totalM+')'+' Macbook Pro 13 Inch. = $'+totalM*precioM+' pesos.'+'</p>'+'<br>'+'+'+'<br>'+
        '<p>'+' ('+totalE+')'+' AirPods Apple. = $'+totalE*precioE+' pesos.'+'</p>'+'<br>'+
        '<p>'+'Subtotal: '+total+' pesos mexicanos.'+'</p>'+'<br>'
        + '<p>'+'Total con IVA (16% de la compra): '+ (total*1.16)+' pesos mexicanos.'+'</p>';
    }else if(s && m){
        document.getElementById("desgloce").innerHTML = 
        '<p>'+' ('+totalS+')'+' Tel. Samsung Galaxy Note 8 = $'+totalS*precioS+ ' pesos.'+'</p>'+'<br>'+'+'+'<br>'
        +'<p>'+' ('+totalM+')'+' Macbook Pro 13 Inch. = $'+totalM*precioM+' pesos.'+'</p>'+'<br>'+
        '<p>'+'Subtotal: '+total+' pesos mexicanos.'+'</p>'+'<br>'
        + '<p>'+'Total con IVA (16% de la compra): '+ (total*1.16)+' pesos mexicanos.'+'</p>';
    }else if(s && e){
        document.getElementById("desgloce").innerHTML = 
        '<p>'+' ('+totalS+')'+' Tel. Samsung Galaxy Note 8 = $'+totalS*precioS+ ' pesos.'+'</p>'+'<br>'+'+'+'<br>'
        +'<p>'+' ('+totalE+')'+' AirPods Apple. = $'+totalE*precioE+' pesos.'+'</p>'+'<br>'+
        '<p>'+'Subtotal: '+total+' pesos mexicanos.'+'</p>'+'<br>'
        + '<p>'+'Total con IVA (16% de la compra): '+ (total*1.16)+' pesos mexicanos.'+'</p>';
    }else if(m && e){
        document.getElementById("desgloce").innerHTML = 
        '<p>'+' ('+totalM+')'+' Macbook Pro 13 Inch. = $'+totalM*precioM+' pesos.'+'</p>'+'<br>'+'+'+'<br>'+
        '<p>'+' ('+totalE+')'+' AirPods Apple. = $'+totalE*precioE+ ' pesos.'+'</p>'+'<br>'
        + '<p>'+'Total con IVA (16% de la compra): '+ (total*1.16)+' pesos mexicanos.'+'</p>';
    }else if(s){
        document.getElementById("desgloce").innerHTML = 
        '<p>'+' ('+totalS+')'+' Tel. Samsung Galaxy Note 8 = $'+totalS*precioS+' pesos.'+'</p>'+'<br>'+
        '<p>'+'Subtotal: '+total+' pesos mexicanos.'+'</p>'+'<br>'
        + '<p>'+'Total con IVA (16% de la compra): '+ (total*1.16)+' pesos mexicanos.'+'</p>';
    }else if(m){
            document.getElementById("desgloce").innerHTML = 
        '<p>'+' ('+totalM+')'+' Macbook Pro 13 Inch. = $'+totalM*precioM+' pesos.'+'</p>'+'<br>'+
        '<p>'+'Subtotal: '+total+' pesos mexicanos.'+'</p>'+'<br>'
        + '<p>'+'Total con IVA (16% de la compra): '+ (total*1.16)+' pesos mexicanos.'+'</p>';
    }else if(e){
        document.getElementById("desgloce").innerHTML = 
        '<p>'+' ('+totalE+')'+' AirPods Apple. = $'+totalE*precioE+' pesos.'+'</p>'+'<br>'+
        '<p>'+'Subtotal: '+total+' pesos mexicanos.'+'</p>'+'<br>'
        + '<p>'+'Total con IVA (16% de la compra): '+ (total*1.16)+' pesos mexicanos.'+'</p>';
    }else{
        document.getElementById("desgloce").innerHTML = 'No tienes ningún elemento en lista...';
        document.getElementById("desgloce").style.backgroundColor = "white";
        document.getElementById("desgloce").style.borderColor = "white";
    }
    if(e || m || s){
        document.getElementById("desgloce").style.backgroundColor = "lightyellow";
        document.getElementById("desgloce").style.borderColor = "lightgray";
    }
    
}


function f(){
    let a,b,c;
    a = true;
    console.log(a);
    a = 10; 
    console.log(a);
    a = "hello";
    console.log(a);
}
document.getElementById("desgloce").innerHTML = 'No tienes ningún elemento en lista...';
document.getElementById("desgloce").style.backgroundColor = "white";
document.getElementById("desgloce").style.borderColor = "white";
imprimirRestantes();