$(document).ready(function(){
	$("#botaoenviar").click(function(){
		alert("Mensagem enviada!");
	});
});

$(document).ready(function(){
	$(".itens").hover(function(){
    	$(this).css("background-color", "#096979");
    }, function(){
    	$(this).css("background-color", "#1DA7C4");
	});
});

$(document).ready(function(){
	$("#titulosInicio").hide();
	$("#titulosInicio").slideDown(1200);
	$("#titulosInicio").fadeIn(2400);
});