function funcion1(){
    document.write("Ejercicio 1:\n");
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
}
function funcion5(){
    let str = prompt("Escribe el numero: ");
    let strFinal = Array(str.length);
    let ult = str.length-1;
    for(let i = 0;i<str.length;i++){
        strFinal[i] = str[ult];
        ult--;
    }
    document.write(strFinal);
}
<<<<<<< HEAD

var calculadora = new Oject();
calculadora.listaNumeros = new Array();
calculadora.listaOperaciones = new Array();

funcion5();

