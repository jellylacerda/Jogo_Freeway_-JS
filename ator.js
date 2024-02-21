//cod ator

let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30 );
  
}


function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
       yAtor += 3;
    }
   
  }
}
function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], wCarros, hCarros, xAtor, yAtor, 15)
    if(colisao){
      voltaPosicaoAtor();
      somColisao.play();
      if(pontosMaiorZero()){
        meusPontos -=1;
      }
      
    }
  }
}

function voltaPosicaoAtor(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255, 30, 40);
  text(meusPontos, width/5, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos +=1;
    somPonto.play();
    voltaPosicaoAtor();
  }
 
}

function pontosMaiorZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}