var operandeGauche = ""; // Contient les calculs
var operation = ""; // Contient le résultat
var operandeDroite = "";
var resultat = ""; // Contient le résultat
//var button = ""; //Contient la valeur du bouton cliqué
var operandeGaucheNotFull = true;


function additionner(a, b){
    return a + b;
}

function soustraire(a, b){
    return a - b;
}

function multiplier(a, b){
    return a * b;
}

function diviser(a, b){
    return a / b;
}


$("#operation").on("click", function(){
    $("#operandeGauche").css('background-color', 'red');
});


$(".button").click(function()
{
    buttonClicked = $(this).html();
    operandeGauche = Number($("#operandeGauche").html());
    operation = $("#operation").html();
    operandeDroite = Number($("#operandeDroite").html());
    console.log(buttonClicked);

    if(buttonClicked == "=")
    {
        $("#operandeDroite").css('background-color', 'red');
            switch (operation) {
                case "+":
                    var resultat = additionner(operandeGauche, operandeDroite);
                    $("#result").html(resultat);
                    break;
                case "-":
                    var resultat = soustraire(operandeGauche, operandeDroite);
                    $("#result").html(resultat);
                    break;
                case "*":
                    var resultat = multiplier(operandeGauche, operandeDroite);
                    $("#result").html(resultat);
                    break;
                case "/":
                    var resultat = diviser(operandeGauche, operandeDroite);
                    $("#result").html(resultat);
                    break;
                default:
            }
    }
    else if(operandeGaucheNotFull == true && (isNaN(buttonClicked) == false))
    {
        //console.log(operandeGauche);
        $("#operandeGauche").append(buttonClicked);
    }
    else if (isNaN(buttonClicked)==true && buttonClicked != "=") {
        $("#operation").append(buttonClicked);
        operandeGaucheNotFull = false;
        $("#operandeGauche").css('background-color', 'red')
    }
    else {
        $("#operandeDroite").append(buttonClicked);
        $("#operation").css('background-color', 'red')
    }

    //Quand on clique sur reset, remise à zéro
    $("#reset").click(function(){
        $("#operandeGauche, #operandeDroite, #operation").css('background-color', '#CCCCCC');
        //empty
        $("#operandeGauche, #operandeDroite, #operation, #result").empty();
        operandeGaucheNotFull = true;
    });


/*
	 button = $(this).html(); // Affecte valeur du bouton cliqué à la variable button

// Reste du code ici

    if(button == "=")
    	{
    		tg = eval(val); // Interprète les calculs
    	}
        else if(button == "Reset")
    	{
    		val = "";
    		tg = "";
                    //// Calculatrice remise à zéro
    	}
        else
    	{
    		val += button; // on ajoute la valeur du bouton au calcul
    	}

    $("#op1").html(val);
    $("#result").html(tg);
*/
});
