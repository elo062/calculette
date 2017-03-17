// $("#un").click(function(){
//   value=1;
// });
// $("#deux").click(function(){
//   value=2;
// });
// $("#trois").click(function(){
//   value=3;
// });
// $("#quatre").click(function(){
//   value=4;
// });
// $("#cinq").click(function(){
//   value=5;
// });
// $("#six").click(function(){
//   value=6;
// });
// $("#sept").click(function(){
//   value=7;
// });
// $("#huit").click(function(){
//   value=8;
// });
// $("#neuf").click(function(){
//   value=9;
// });
// $("#zero").click(function(){
//   value=0;
// });
// $("#mul").click(function(){
//
// });
// $("#sous").click(function(){
//
// });
// $("#addi").click(function(){
//
// });
// $("#eff").click(function(){
// });
// $("#egal").click(function(){
//
// });
// // console.log($('#un').text());
//
// function afficher(){
//   .text()

var btn = "";

$(".tch").click(function(){
  btn = $(this).html();
  $("#premier").append(btn);
});

$('#egal').click(function(){

  var z = $("#premier").text();

  if(z.includes("+")){
    var posadd =z.indexOf('+');
    var val1= Number(z.substring(0, posadd));
    var val2= Number(z.substring(posadd+1, 30));
    var addit= val1 + val2;
    $("#deuz").html(addi
  }
  else if(z.includes('-')){
    var posSous =z.indexOf('-');
    var val1= Number(z.substring(0, posSous));
    var val2= Number(z.substring(posSous+1, 30));
    var sous= val1 - val2;
    $("#deuz").html(sous);
  }
  else{
    var posx=z.indexOf('X');
    var val1= Number(z.substring(0, posx));
    var val2= Number(z.substring(posx+1, 30));
    var multi= val1 * val2;
    $("#deuz").html(multi);
  }
});

$('.tcheff').click(function(){
  $('#premier').html(' ');
  $('#deuz').html(' ');
})
