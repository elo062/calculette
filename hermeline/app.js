var btn = "";

//Récupère les touches "tch" et les rend cliquables
$(".tch").click(function(){
  btn = $(this).html();
  $("#premier").append(btn);  // Fais ensorte que les clicks s'inscrivent dans la 1ERE CASE
});

$('#egal').click(function(){   //Ce qui se passe quand on clisque sur egal :

  var z = $("#premier").text();  // var qui prend le texte de la premiere case

  if(z.includes("+")){     // SI le caractere + est inclus dans la chaine :
    var posadd =z.indexOf('+');   // trouve sa position :
    var val1= Number(z.substring(0, posadd));  // récupère ce qui est avant pour le 1er nombre :
    var val2= Number(z.substring(posadd+1, 30));  // récupère ce qui est APRES pour le 2eme nombre :
    var addit= val1 + val2;   // Additionne les 2
    $("#deuz").html(addi);    // Affiche le résultat dans la CASE 2
  }
  else if(z.includes('-')){    // idem au dessus mais avec le -
    var posSous =z.indexOf('-');
    var val1= Number(z.substring(0, posSous));
    var val2= Number(z.substring(posSous+1, 30));
    var sous= val1 - val2;
    $("#deuz").html(sous);
  }
  else{  // idem avec ce qu'il reste, donc le X
    var posx=z.indexOf('X');
    var val1= Number(z.substring(0, posx));
    var val2= Number(z.substring(posx+1, 30));
    var multi= val1 * val2;
    $("#deuz").html(multi);
  }
});

$('.tcheff').click(function(){    // Quand on clique sur la touche effacer :
  $('#premier').html(' ');   // dans la premiere case on ne met rien
  $('#deuz').html(' ');   // idem 2eme case
})
