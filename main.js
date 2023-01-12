canvas = document.getElementById('meuCanvas');
cor = "black";
largura = 2;
caneta = canvas.getContext("2d");
var eventoMouse = "";
var ultimaPosicaox, ultimaPosicaoy;
var tamanhoTela = screen.width;
var novaAltura = screen.height - 300;
var novaLargura = screen.width - 70;
if(tamanhoTela<992){
    canvas.width = novaLargura;
    canvas.height = novaAltura;
    document.body.style.overflow = "hidden";
}
function blue(){
    cor = "blue";
}
function green(){
    cor = "green";
}
function yellow(){
    cor = "yellow";
}
function red(){
    cor = "red";
}
function black(){
    cor = "black";
}
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(evento)
{
//cor = document.getElementById('cor').value;
largura = document.getElementById('largura').value;
eventoMouse = "mousedown";
}
//canvas.addEventListener("mouseleave", myMouseLeave);
//function myMouseLeave(evento)
//{
//    eventoMouse = "mouseleave";
//}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(evento)
{
    eventoMouse = "mouseup";
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(evento)
{
    posicaoMousex = evento.clientX - canvas.offsetLeft;
    posicaoMousey = evento.clientY - canvas.offsetTop;
    if(eventoMouse == "mousedown"){
        caneta.beginPath();
        caneta.strokeStyle = cor;
        caneta.lineWidth = largura;
        caneta.moveTo(ultimaPosicaox, ultimaPosicaoy);
        caneta.lineTo(posicaoMousex, posicaoMousey);
        caneta.stroke();
    }
    ultimaPosicaox = posicaoMousex;
    ultimaPosicaoy = posicaoMousey;
}
//começa o touch
canvas.addEventListener("touchstart", myTouchStart);
function myTouchStart(evento)
{
//cor = document.getElementById('cor').value;
largura = document.getElementById('largura').value;
ultimaPosicaox = evento.touches[0].clientX-canvas.offsetLeft;
ultimaPosicaoy = evento.touches[0].clientY-canvas.offsetTop;

}

canvas.addEventListener("touchmove", myTouchMove);
function myTouchMove(evento)
{
    Posicaox = evento.touches[0].clientX-canvas.offsetLeft;
    Posicaoy = evento.touches[0].clientY-canvas.offsetTop;
    if(eventoMouse == "mousedown"){
        caneta.beginPath();
        caneta.strokeStyle = cor;
        caneta.lineWidth = largura;
        caneta.moveTo(ultimaPosicaox, ultimaPosicaoy);
        caneta.lineTo(Posicaox, Posicaoy);
        caneta.stroke();
    }
    ultimaPosicaox = Posicaox;
    ultimaPosicaoy = Posicaoy;
}
function limpar(){
    caneta.clearRect(0,0, caneta.canvas.width,caneta.canvas.height)
}
