var canvas = new fabric.Canvas("canvas");
var jugador = "";
var bloque = "";
var altura = 30;
var x = 0 ;
var y = 0 ;
function player(){
    fabric.Image.fromURL('bruslee.png', function(oImg) {
        jugador=oImg;
        jugador.scaleToWidth(150);
        jugador.scaleToHeight(152);
        jugador.set({
            top:y , left:x
        })
        canvas.add(jugador);
      });
}
function block(Image){
    fabric.Image.fromURL(Image , function(oImg){
        bloque=oImg;
        bloque.scaleToWidth(altura);
        bloque.scaleToHeight(altura);
        bloque.set({ 
            top:y , left:x
        })
        canvas.add(bloque);
    })
}
window.addEventListener("keydown" , mykeydown)
function mykeydown(e){
    var tecla = e.keyCode;
    if (tecla=="39"){
        x= x+altura;
        canvas.remove(jugador)
        player();
    }
    if (tecla=="37"){
        x= x-altura;
        canvas.remove(jugador)
        player();
    }
    if (tecla=="38"){
        y= y-altura;
        canvas.remove(jugador)
        player();
    }
    if (tecla=="40"){
        y= y+altura;
        canvas.remove(jugador)
        player();
    }
    if (tecla=="81"){
        block("nether.png");   
    }
    if (tecla =="87"){
        block("roof.jpg");
    }
    if (tecla =="69"){
        block("ground.png");
    }
    if (e.shiftKey && tecla=="187"){
        altura=altura+10
        document.getElementById("ancho").innerHTML="ancho="+altura+"px"
        document.getElementById("altura").innerHTML="altura="+altura+"px"
    }
    if (e.shiftKey && tecla=="189"){
        altura=altura-10
        document.getElementById("ancho").innerHTML="ancho="+altura+"px"
        document.getElementById("altura").innerHTML="altura="+altura+"px"
    }
}