var calc = "";
var res = "";
var button = "";

$(".button").click(function(){
   button = $(this).html();

	 if(button == "="){
	 res = eval(calc);
   }

   else if(button == "Reset"){
   calc = "";
   res = "";
   }

	 else{
	calc += button;
	}

	$("#op").html(calc);
	$("#result").html(res);
});
