const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
   {
    enunciado: "O que fazer com o kauan quando ele falta dois dias seguidos?", 
    alternativas: [
        {
            texto: "Nada (vc vai ter o mesmo destino...)",
            afirmacao: "afirmacao"
        },
        {
            texto:  "Mandar ele Para conversar com o Junior (ALTERNATIVA CORRETA)"
    ]
        }
        
       
},
{
    enunciado: "o kauan vai reprovar?", 
    alternativas: [
        "Sim", 
        "Claro"
    ]
},
{
     enunciado: "Quem descobriu o Brasil?", 
    alternativas: [
        "Pedro Àlvares Cabral", 
        "Pelé"
    ]
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();