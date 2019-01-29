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
    document.write("Negativos: "+neg+"\n Ceros: "+cero+"\n Mayores a cero: "+mayores);
}
funcion1();
funcion2();
funcion3();