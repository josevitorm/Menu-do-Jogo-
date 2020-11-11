var x = 158;
var y = 165;

var escolha = 1;
var tela = 0;

function preload(){
    img = loadImage('fazendacolorida.jpg')
    fontetitulo = loadFont('Letters for Learners.ttf')
}

function setup() {
createCanvas(550, 550);
}

function draw() {

  background(img);
  if(tela==0)
    menu();
  if(tela==1)
     Iniciar();
  if(tela==2)
    Instruções();
  if(tela==3)
    Sobre();
  if(tela==4)
    Créditos();
}

function menu(){
      fill(255, 255, 255)
      rect(x, y, 250, 45, 10)
    
      textSize(64)
      fill(0,0,5)
      textFont(fontetitulo)
      text('From Farm to City', 75, 75)
      
      textSize(50)
      fill(0,0,5)
      text('Iniciar', 237, 200)
      text('Instruções', 202, 300)
      text('Sobre o Jogo', 180,400)
      text('Créditos', 215, 500)
}
function Iniciar(){
    textSize(55)
    fill(0,0,0)
    text('Começando o Jogo!',110, 200)
}
function Instruções(){
    textSize(30)
    text('', 80, 200)
}
function Sobre(){
    textSize(40)
    text('(EF04GE07) Comparar as características do trabalho no campo e na cidade.', 30, 50, 500)
}  
  function Créditos(){
    textSize(40)
    text('José Vítor Moreira, Turma 5 de LOP/ECT-UFRN', 30,50,500)
}

function keyPressed() {
   if(key=="ArrowUp" && y>200){
     y= y-100;
     escolha = escolha - 1   
   }if(key=="ArrowDown" && y<400){
     y= y + 100;
     escolha = escolha + 1
}
    if(key=="Enter"){
      tela=escolha
    }
  if(key=="Escape"){
      tela=0
    }
}