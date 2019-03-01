function serieDeEventos(){
    console.log(genero);
    console.log(clubS);
    
    if(edad >= 12 && edad <= 15 || (edad < 15 && edad != 0)){
        categoria = "junior";
    }else if(edad >= 16 && categoria <= 54){
        if(genero == "Masculino"){
            categoria = "caballeros";
        }else if(genero == "Femenino"){
            categoria = "damas";
        }
    }else if(edad>=55){
        categoria = "senior";
    }
    
    document.getElementById("colocarFormas").innerHTML =  '<div class="input-field col s12">'+
          '<input disabled value="I am not editable" id="disabled" type="text" class="validate">'+
          '<label for="disabled">Disabled</label>';
}
genero = "a";
gender = false;
club = false;
clubS = " ";
edad = 0;

document.getElementById("registrar_genero").onchange = validarCondiciones;
document.getElementById("registrar_club").onchange = validarCondiciones;

function validarCondiciones(){
    genero = document.getElementById("registrar_genero").value;
    edad = document.getElementById("registrar_edad").value;
    clubS = document.getElementById("registrar_club").value;
    console.log(genero);
    console.log(clubS);
    console.log(edad);
    switch(genero){
        case "Masculino":
            gender = true;
        break;
            
        case "Femenino":
            gender = true;
        break;
        
        default:
            genero = "a";
            gender = false;
        break;
    }
    if(clubS != " "){
        club = true;
    }
    
    if(club == true && edad !=0 && gender == true)
        serieDeEventos();
}