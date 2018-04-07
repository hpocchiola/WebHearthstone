$("#estilo2").click(function() {
    var texto = $.cookie("cssCambio");
    $.cookie('cssCambio','css/estilo.css');
    cambiarEstilo2a1();

}
);


$("#estilo1").click(function() {
    var texto = $.cookie("cssCambio");
    $.cookie('cssCambio','css/estilo2.css');
    cambiarEstilo1a2();
   
}
);

function cambiarEstilo2a1 () {
    $('link[id="estilos"]').attr('href','css/estilo2.css');
}


function cambiarEstilo1a2 () {
    $('link[id="estilos"]').attr('href','css/estilo.css');    
}