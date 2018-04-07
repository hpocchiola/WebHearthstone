
$( document ).ready(function() {
    if(localStorage.getItem("cssActual") ==null)
      establecerEstilo1();
    else{
        if(localStorage.getItem("cssActual")=="estilo2")
           establecerEstilo2();  
        else
            establecerEstilo1();
    }
});

$("#estilo1").click(function() {
    establecerEstilo1();
});


$("#estilo2").click(function() { 
  establecerEstilo2(); 
});

function establecerEstilo1 () {
    localStorage.setItem("cssActual", "estilo");
    $('link[id="estilos"]').attr('href','css/estilo.css');
}

function establecerEstilo2 () {
    localStorage.setItem("cssActual", "estilo2");       
    $('link[id="estilos"]').attr('href','css/estilo2.css'); 
}