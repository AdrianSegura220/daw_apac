
//esta función básicamente instancia al objeto XMLHttpRequest dependiendo del navegador...
function getRequestObject() {
  // Asynchronous objec created, handles browser DOM differences

  if(window.XMLHttpRequest) {
    // Mozilla, Opera, Safari, Chrome, IE 7+
    return (new XMLHttpRequest());
  }
  else if (window.ActiveXObject) {
    // IE 6-
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } else {
    // Non AJAX browsers
    return(null);
  }
}
//función de entrada para la forma que funciona con jquery...
function sendRequest(){

   let NUEVO_CODIGO = 1;
   
   if (NUEVO_CODIGO) {
       
       $.get( "controller.php", { pattern: document.getElementById('userInput').value })
          .done(function( data ) {
              var ajaxResponse = document.getElementById('ajaxResponse');
              ajaxResponse.innerHTML = data;
              ajaxResponse.style.visibility = "visible";
          });
       
   } else {
       //se asignamos al objeto xhmlhttprequest
       request=getRequestObject();
       //checa que el objeto no sea nulo, es decir que el navegador del usuario acepta tecnología ajax
       if(request!=null)
       {
         var userInput = document.getElementById('userInput');
         var url='controller.php?pattern='+userInput.value;
           
        //inicializa una nueva peticion con el método específicado, envía la solicitud al url especificado
         request.open('GET',url,true);
         request.onreadystatechange = 
                function() { 
                    if((request.readyState==4)){
                        // Asynchronous response has arrived
                        var ajaxResponse=document.getElementById('ajaxResponse');
                        ajaxResponse.innerHTML=request.responseText;
                        ajaxResponse.style.visibility="visible";
                        //M.AutoInit();
                    }     
                };
         request.send(null);
       }
       
   }
   
}

function selectValue() {

   var list=document.getElementById("list");
   var userInput=document.getElementById("userInput");
   var ajaxResponse=document.getElementById('ajaxResponse');
   userInput.value=list.options[list.selectedIndex].text;
   ajaxResponse.style.visibility="hidden";
   userInput.focus();
}
