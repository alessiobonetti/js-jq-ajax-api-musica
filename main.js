// Funzione

function getMusic (music) {

  var source = $("#music-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i< music.length; i++){
    var album = music[i];

    var html = template(album);

    $(".cds-container").append(html);
  }
}


$(document).ready(function() {
  $.ajax(
  {
    "url": "https://flynn.boolean.careers/exercises/api/array/music",
    "method": "GET",
    "success": function (data, stato) {
    getMusic(data.response);
    },
    "error": function (richiesta, stato, errori) {
    alert("E' avvenuto un errore. " + errore);
    }
  });
});
