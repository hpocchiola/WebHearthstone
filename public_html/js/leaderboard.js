
function mostrarRankingEquipos (datosEquipos){
    for (i = 0; i < datosEquipos.equipos.length; i++) {
     $("#rankingEquipos").append($("<li></li>").addClass("list-group-item").text(datosEquipos.equipos[i].nombre));
    }
}

function mostrarRankingIntegrantes (datosIntegrantes){
    for (i = 0; i < datosIntegrantes.integrantes.length; i++) {
     $("#rankingIntegrantes").append($("<li></li>").append(datosIntegrantes.integrantes[i].nickname));
    }
}

var jsonIntegrantes = JSON.parse($.getJSON({'url': "json/integrantes.json", 'async': false}).responseText);
var jsonEquipos = JSON.parse($.getJSON({'url': "json/equipos.json", 'async': false}).responseText);

$(document).ready(mostrarRankingEquipos(jsonEquipos));
$(document).ready(mostrarRankingIntegrantes(jsonIntegrantes));

