const TOTALEQUIPOS = 4;

var jsonIntegrantes = JSON.parse($.getJSON({'url': "json/integrantes.json", 'async': false}).responseText);
var jsonEquipos = JSON.parse($.getJSON({'url': "json/equipos.json", 'async': false}).responseText);

function mostrarEquipos (datosEquipos){
    for (i = 0; i < datosEquipos.equipos.length; i++) {
       var id = "equipo"+(i+1);
       $("#muestraEquipos").append($("<li></li>").addClass("list-group-item").attr("id",id).text(datosEquipos.equipos[i].nombre));
    }
}


function mostrarIntegrantes(datosEquipos, idEquipo) {
    var equipoElegido;
    switch (idEquipo) {
    case "equipo1":
        equipoElegido=0;
        break;
    case "equipo2":
        equipoElegido=1;
        break;
    case "equipo3":
        equipoElegido=2;
        break;
    case "equipo4":
        equipoElegido=3;
        break;
    }
    
    for (i = 0; i < datosEquipos.equipos[equipoElegido].integrantes.length; i++) {
       var id = "integrante" + (i+1);
       $("#muestraIntegrantes").append($("<li></li>").addClass("list-group-item").attr("id",id).text(datosEquipos.equipos[equipoElegido].integrantes[i].nickname));
}
return equipoElegido;
}

function mostrarIntegrantesVacio (){
   for (i = 0; i < 3; i++) {
       var text = "integrante " + (i+1);
       $("#muestraIntegrantes").append($("<li></li>").addClass("list-group-item").text(text));
   }
}

function mostrarInformacion (datosEquipos, equipoElegido, datosIntegrantes, idIntegrante){
    
    var integranteElegido;
    switch (idIntegrante) {
    case "integrante1":
        integranteElegido=0;
        break;
    case "integrante2":
        integranteElegido=1;
        break;
    case "integrante3":
        integranteElegido=2;
        break;
    }
    var integrantes = ordenarIntegrantes (datosEquipos, equipoElegido, datosIntegrantes);
    var integrante = integrantes[integranteElegido];
    $("#nombre").text("Nombre: " + integrante.nombre);
    $("#apellido").text("Apellido: "+ integrante.apellido);
    $("#edad").text("Edad: " + integrante.edad);
    $("#favCard").text("Carta Favorita: " + integrante.cartaFavorita);
    $("#favClass").text("Clase Favorita: " + integrante.claseFavorita);
}

function ordenarIntegrantes (datosEquipos, equipoElegido, datosIntegrantes) {
    var arrIntegrantes = [];
    for (j = 0; j < datosEquipos.equipos[equipoElegido].integrantes.length;j++) {
        for (i = 0; i < datosIntegrantes.integrantes.length; i++) {
            if (datosEquipos.equipos[equipoElegido].integrantes[j].nickname === datosIntegrantes.integrantes[i].nickname) {
                arrIntegrantes[j] = datosIntegrantes.integrantes[i];
            }
        }
    }
    return arrIntegrantes;
}

function mostrarIcono(datosEquipos, equipoElegido) {
    
}

function clickEquipo (e) {
    $("#muestraIntegrantes").empty();
    var id = $(e.target).attr("id");
    var equipoElegido = mostrarIntegrantes(jsonEquipos,id);
    $("#muestraIntegrantes").children().on("click", {x:equipoElegido},clickIntegrante);
    $(e.target).addClass("equipoCSS");
    $(e.target).siblings().removeClass("equipoCSS");
    }
    
 function clickIntegrante (e) {
    //$("#informacionIntegrante").empty();
    var id = $(e.target).attr("id");
    mostrarInformacion(jsonEquipos,e.data.x,jsonIntegrantes,id);
    $(e.target).addClass("equipoCSS");
    $(e.target).siblings().removeClass("equipoCSS");
 }

$(document).ready(mostrarEquipos(jsonEquipos));
$(document).ready(mostrarIntegrantesVacio());
$(document).ready($("#muestraEquipos").children().click(clickEquipo));