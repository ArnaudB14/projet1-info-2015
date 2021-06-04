window.unload =function() {

};


var creerNoeud = function (o) {
  var a=document.createElement(o["balise"])
  if (o.hasOwnProperty("contenu"))
  a.innerText=o["contenu"]
  if (o.hasOwnProperty("style"))
  a.setAttribute("style",o["style"])
  if (o.hasOwnProperty("id"))
  a.setAttribute("id",o["id"])
  if (o.hasOwnProperty("class"))
  a.setAttribute("class",o["class"])
  if (o.hasOwnProperty("href"))
  a.setAttribute("href",o["href"])
  if (o.hasOwnProperty("alt"))
  a.setAttribute("alt",o["alt"])
  if (o.hasOwnProperty("src"))
  a.setAttribute("src",o["src"])
  if (o.hasOwnProperty("target"))
  a.setAttribute("target",o["target"])
  return a
};

var tab=["../Images/galerie1.jpg","../Images/galerie2.jpg","../Images/galerie3.jpg","../Images/galerie4.jpeg","../Images/galerie5.jpg","../Images/galerie6.png","../Images/galerie7.jpg"]
var i=0;

function photo() {
  var karris= document.getElementById("galerie");
  karris.appendChild(creerNoeud({
    balise : "img",
    src : tab[i],
    id: "imgH"
  }))
}

photo();//amorce

document.getElementById("btdroit").addEventListener('click',function(){
  document.getElementById("imgH").parentNode.removeChild(imgH);
  i+=1;
  if (i==7) {
    i=0
    photo()
  }
  else {
    photo()
  }
});

document.getElementById("btgauche").addEventListener('click',function(){
  document.getElementById("imgH").parentNode.removeChild(imgH);
  i-=1;
  if (i==-1) {
    i=6
    photo()
  }
  else {
    photo()
  }
})
