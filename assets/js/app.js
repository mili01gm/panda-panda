var origen = document.getElementById('btn-origin');
var historia = document.getElementById('btn-history');
var restore = document.getElementById('btn-restore');
var artOrigin = document.getElementById('art-origin');
var artHistory = document.getElementById('art-history');
var fotos = document.getElementById('photos');

var osos = document.getElementsByClassName('panda-pic');
var oso = document.getElementById("panda1");
var equis = document.getElementById('close1');

equis.addEventListener("click", function(e){
  return oso.parentNode.style.visibility = "hidden";
});



window.addEventListener("load",function(){
  origen.addEventListener("click", function(e){
    e.preventDefault();
    if(artOrigin.style.visibility == "hidden"){
      return artOrigin.style.visibility = "visible";
    } else {
      return artOrigin.style.visibility = "hidden";
    }
  });

  historia.addEventListener("click", function(e){
    e.preventDefault();
    if(artHistory.style.visibility == "hidden"){
      return artHistory.style.visibility = "visible";
    } else {
      return artHistory.style.visibility = "hidden";
    }
  });

  restore.addEventListener("click",function(e){
    fotos.style.display = "block";
    for(var i = 0; i < osos.length; i++){
      if(osos[i].style.visibility == "hidden")
        return osos[i]. style.visibility = "visible"
    }
  });


});
