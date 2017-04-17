var origen = document.getElementById('btn-origin');
var historia = document.getElementById('btn-history');
var restore = document.getElementById('btn-restore');
var artOrigin = document.getElementById('art-origin');
var artHistory = document.getElementById('art-history');
var fotos = document.getElementById('photos');

var osos = document.getElementsByClassName('panda-pic');
var oso1 = document.getElementById("panda1");
var oso2 = document.getElementById("panda2");
var oso3 = document.getElementById("panda3");
var oso4 = document.getElementById("panda4");
var equis1 = document.getElementById('close1');
var equis2 = document.getElementById('close2');
var equis3 = document.getElementById('close3');
var equis4 = document.getElementById('close4');

function noHidden(param){
  if(param.style.display == "none"){
    return param.style.display = "inline-block"
  }
}

window.addEventListener("load",function(){
  equis1.addEventListener("click", function(e){
    return oso1.parentNode.style.display = "none";
  });
  equis2.addEventListener("click", function(e){
    return oso2.parentNode.style.display = "none";
  });
  equis3.addEventListener("click", function(e){
    return oso3.parentNode.style.display = "none";
  });
  equis4.addEventListener("click", function(e){
    return oso4.parentNode.style.display = "none";
  });

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
    noHidden(oso1.parentNode);
    noHidden(oso2.parentNode);
    noHidden(oso3.parentNode);
    noHidden(oso4.parentNode);
  });


});
