$(document).ready(function(){
  $(".box").click(funcionar);
  $("#reinicio").click(reiniciar);
});

function validar (value){

    var uno=$("#1").text()
    var dos=$("#2").text()
    var tres=$("#3").text()
    var cuatro=$("#4").text()
    var cinco=$("#5").text()
    var seis=$("#6").text()
    var siete=$("#7").text()
    var ocho=$("#8").text()
    var nueve=$("#9").text()

    var ganador = true;

    if(uno==dos && uno==tres && uno == value){
    	alert("GANASTE ESTA PARTIDA!");
    }else if(uno==cuatro && uno==siete && uno == value){
    	alert("GANASTE ESTA PARTIDA!");
    }else if(uno==cinco && uno==nueve && uno == value){
    	alert("GANASTE ESTA PARTIDA!");
    }else if(dos==cinco && dos==ocho && dos == value){
    	alert("GANASTE ESTA PARTIDA!");
    }else if(tres==seis && tres==nueve && tres == value){
    	alert("GANASTE ESTA PARTIDA!");
    }else if(siete==ocho && siete==nueve && siete == value){
    	alert("GANASTE ESTA PARTIDA!");
    }else if(tres==cinco && tres==siete && tres == value){
    	alert("GANASTE ESTA PARTIDA!");
    }else if(cuatro==cinco && cuatro==seis && cuatro == value){
    	alert("GANASTE ESTA PARTIDA!");
    }else{
    	ganador = false;
    }
    return ganador;
}

var contador=0;
function funcionar (){
    var resultado;
    contador+=1;
    if (contador%2==0){
    $(this).text("x");
    resultado=validar("x");

    }else{
    $(this).text("o");
    resultado=validar("o");

   }
    $(this).off("click")
    if (contador==9 && resultado==false){ 
     alert("Perdiste");
    }

}
function reiniciar (){
    $("#1").text("+")
    $("#2").text("+")
    $("#3").text("+")
    $("#4").text("+")
    $("#5").text("+")
    $("#6").text("+")
    $("#7").text("+")
    $("#8").text("+")
    $("#9").text("+")
    $(".box").off("click");
    $(".box").click(funcionar);
    contador=0;
}
