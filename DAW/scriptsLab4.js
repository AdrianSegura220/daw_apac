
var calculadora = new Object();
calculadora.listToProccess = new Array();
calculadora.prevNum = false;
calculadora.acumulado = 0;
var prev = " ";
var contOp = 0;
var aImprimir = new Array();
var contadorPantalla = 0;
var finalImpresion = "";

function funcion1(){
    document.write("Ejercicio 1:\n");
    var body = document.getElementsByTagName("body")[0];
    let rows = prompt("Inserta el número: ");
    var numeros = new Array(rows);
    let tabla = '';
    tabla += '<tr>';
    tabla += '<th>'+'Número'+'</th>';
    tabla += '<th>'+'N^2'+'</th>';
    tabla += '<th>'+'N^3'+'</th>';
    tabla += '</tr>';
    var i;
    for(i=0;i<rows;i++){
        tabla += '<tr>';
        tabla += '<td>'+(i+1)+'</td>';
        tabla += '<td>'+Math.pow(i+1,2)+'</td>';
        tabla += '<td>'+Math.pow(i+1,3)+'</td>';
        tabla += '</tr>';
    }
    document.write('<table border = 1>'+tabla+'</table>'+'<br>');
    espaciar();
    
}
function funcion2(){
    let suma = Math.floor((Math.random() * 5)+1)+Math.floor((Math.random() * 5)+1);
    console.log(suma);
    let t1 = performance.now();
    let input = prompt("Adivina el número del 1 al 10:");
    let t2 = performance.now();
    if(input == suma){
       alert("Correcto, tardaste "+((t2-t1)/1000)+" segundos.");
       }else{
           alert("Incorrecto, tardaste "+((t2-t1)/1000)+" segundos.");
       }
    espaciar();
}
function funcion3(){
    let arr= new Array();
    var i, neg, cero, mayores;
    neg = cero = mayores= i = 0;
    while(confirm("Quieres agregar otro numero?")){
        arr[i]=prompt("Escribe el numero: ");
        i++;
    }
    for(i = 0;i<arr.length;i++){
        var res = arr[i];
        if(res <0){
            neg++;
        }else if(res>0){
            mayores++;
        }else{
            cero++;
        }
    }
    document.write("Negativos: \n"+neg+"\n Ceros: "+cero+"\n Mayores a cero: \n"+mayores+"<br>");
    espaciar();
}
function funcion4(){
    let num = prompt("Cuantas listas de numeros deseas?");
    let res = 0;
    let longitudes = new Array();
    let listaInicial= new Array(num);
    let local = 0;
    for(let i = 0;i<num;i++){
        local = prompt("Que longitud de esta lista deseas? ");
        longitudes[i]=local;
        listaInicial[i]=new Array(local);
        for(let j = 0;j<local;j++){
            listaInicial[i][j]=prompt("Escribe el numero "+(j+1));
        }
    }
    for(let i = 0;i<num;i++){
        for(let j = 0;j<local;j++){
           res += parseInt(listaInicial[i][j]); 
        }
        document.write("<br> Promedio de lista "+ (i+1) + ":<br> "+(res/longitudes[i]));
        res = 0;
    }
    espaciar();
}
function espaciar(){
    for(i = 0;i<4;i++){
        document.write("<br>");
    }
}
function funcion5(){
    let str = prompt("Escribe el numero que deseas INVERTIR: ");
    let strFinal = Array(str.length);
    let ult = str.length-1;
    for(let i = 0;i<str.length;i++){
        strFinal[i] = str[ult];
        ult--;
    }
    document.write(strFinal);
}
function agregarAFila(char){
    imprimir(char);
    console.log("entro");
    if(typeof char == "string"){
        if(calculadora.prevNum == true){
           calculadora.listToProccess[contOp] = parseInt(cadenaNum);
            contOp++;
        }
        if(char == "+"){
            calculadora.listToProccess[contOp] = "+";
        }else if(char == "-"){
            calculadora.listToProccess[contOp] = "-";
        }else if(char == "x"){
            calculadora.listToProccess[contOp] = "x";
        }else if(char == "/"){
            calculadora.listToProccess[contOp] = "/";
        }
        calculadora.prevNum = false;
        prev = "";
        contOp ++;
    }else if(typeof char == "number"){
        cadenaNum = prev+char;
        prev = cadenaNum;
        calculadora.prevNum = true;
    }
    
    console.log(calculadora.listToProccess);
    imprimir();
}
function suma( num1, num2){
    return num1+num2;
}
function multiplicacion(num1, num2){
    return num1*num2;
}
function division(num1, num2){
    return num1/num2;
}
function resta(num1, num2){
    return num1-num2;
}
function clear(){
    
}
function result(){
    if(calculadora.listToProccess.length != 0){
        if(calculadora.prevNum == true){
            calculadora.listToProccess[contOp] = parseInt(cadenaNum);
            contOp++;
            calculadora.prevNum = false;
        }
        calculadora.acumulado = calculadora.listToProccess[0];
        for(i = 0;i<calculadora.listToProccess.length;i++){
            console.log(typeof calculadora.listToProccess[i]);
            if(typeof calculadora.listToProccess[i] == "number"){
            //toma el siguiente numero e interpreta el operador para hacer la operacion correspondiente
                if(typeof calculadora.listToProccess[i+1] == "string" && typeof calculadora.listToProccess[i+2] == "number"){
                    calculadora.acumulado = interpretaOperador(calculadora.acumulado,calculadora.listToProccess[i+2],calculadora.listToProccess[i+1]);
                    calculadora.listToProccess[i+2] = calculadora.acumulado;
                    i++;
                    
                }else{
                    
                }
            }
        }
        console.log(calculadora.acumulado);
    }  
}
function interpretaOperador(num1, num2, operador){
        var final = 0;
        if(operador == "+"){
            final = suma(num1, num2);
        }else if(operador == "-"){
            final = resta(num1, num2);
        }else if(operador == "x"){
            final = multiplicacion(num1,num2);
        }else if(operador == "/"){
            final = division(num1,num2);
        }
    return final;
}

function imprimir(valor){
    switch(valor){
        case "=":
            finalImpresion = calculadora.acumulado;
        break;
        case "c":
            contadorPantalla = 0;
            finalImpresion = "";
            aImprimir = [];
        break;
        default:
            /*aImprimir[contadorPantalla] = valor;
            contadorPantalla++;
            for(i =0;i<aImprimir.length;i++){
            finalImpresion += aImprimir[i];
            }*/
            finalImpresion +=valor;
        break;
    }
    
    var pantalla = document.getElementById("pantallaCalc");
    pantalla.innerHTML=finalImpresion;
}

function correr(){
    funcion1();
    funcion2();
    funcion3();
    funcion4();
    funcion5();
}


