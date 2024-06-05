// ação, fantasia, ficção cienífica, drama

// homem-aranha 2, livre, ação, ficção científica
// a viagem de chihiro, livre, fantasia, aventura
// a vingança dos sith, 10, ação, ficção científica
// Pulp Fiction: Tempo de Violência, 18, drama
// até o último homem, 16, drama



let campoIdade;
let campoFantasia;

function setup() {
  createCanvas(600, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("sua idade") 
  campoIdade = createInput("0");
  campoFantasia = createCheckbox("Gosta de Fantasia?");
  campoAcao = createCheckbox("Gosta de Ação?")
}


function draw() {
    background ("white");
    let gostaDeAcao = campoAcao.checked();
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAcao);
    
  textSize(38);
  textAlign(CENTER, CENTER);
  text(recomendacao, width/2, height/2);

}
function geraRecomendacao(idade, gostaDeFantasia, gostaDeAcao) {
    if(idade >= 10) {
    if(idade >= 16) {
          
      return "Até o último homem";
        } else {
    if(idade >= 12){
    if (gostaDeFantasia || gostaDeAcao){
  
      return "homem-aranha:no aranhaverso"; 
        } else{return "Extraordinario"
                
   }
          
        }else{
    if(gostaDeFantasia){
      return "Prisioneiro de Azkaban";
        } else {
      return "homem-aranha 2";
            }  
  } 
        }
        } else {
    if(gostaDeAcao) {
            return "A vingança dos sith";
        } else {
      return "A viagem de chihiro";
        }
    }
}
