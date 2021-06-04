window.onload=function(){
  document.getElementById('envoi').addEventListener('click',function(){
    qcm()
  })
}

function qcm() {
  var res=0
  var rep1=document.getElementById('rep1').options[document.getElementById('rep1').selectedIndex].value;

  if (rep1=="Roi Dartas") {
    res+=1
  }
  var rep2=document.getElementById('rep2').options[document.getElementById('rep2').selectedIndex].value;
  if (rep2=="200") {
    res+=1
  }
  var rep3=document.getElementById('rep3').options[document.getElementById('rep3').selectedIndex].value;
  if (rep3=="Zelda") {
    res+=1
  }
  var rep4=document.getElementById('rep4').options[document.getElementById('rep4').selectedIndex].value;
  if (rep4=="Les Skimmos") {
    res+=1
  }
  var rep5=document.getElementById('rep5').options[document.getElementById('rep5').selectedIndex].value;
  if (rep5=="Montagne de la mort") {
    res+=1
  }

  if (res>=4) {
    alert("Bravo vous avez réussi le test")
  }
  else {
    alert("Vous avez échoué")
  }
}

function popUp(x) {
  window.open(x,'fenetre','width=650,height=500')

}
