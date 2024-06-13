let palavra; 

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();
  

}
function palavraAleatoria() {
  let palavras = ["Cowboy", "Viajante", "Cavalo"];
  return random(palavras);
}

function draw() {
  background("branco");
  fill("black");
  
  textSize(64);
  textAlign(CENTER, CENTER);
  
  let maximo = width;
  let minimo = 0;
  
function palavraParcial() {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}
  
  let parcial = palavraParcial(); 
  text(parcial, 200, 200);
  
 // if(mouseX < 50) {
 //   let palavra = "V";
 //   text(palavra, 200, 200);
 // } else if(mouseX < 100) {
 //   let palavra = "Vi";
 //   text(palavra, 200, 200);
 // } else{
 // let palavra = "Viajante";
 // text(palavra, 200, 200);
// }
  }