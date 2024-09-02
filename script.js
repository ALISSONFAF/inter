const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A inteligência artificial (IA) é um conjunto de tecnologias que possibilitam aos computadores realizar diversas tarefas avançadas. Quais são as consequências da IA para a privacidade dos dados?",
        alternativas: [
            {
                texto: "A inteligência artificial pode ser crucial para identificar e prevenir ameaças à segurança, mas também acaba expondo informações inseridas por outros usuários da plataforma.",
                afirmacao: "Você está familiarizado com as tecnologias do futuro, mas é bastante prudente."
            },
            {
                texto: "Ela também pode ser empregada como um meio para violar a privacidade.",
                afirmacao: "Você se sente completamente inseguro quanto ao uso da IA e está determinado a proteger suas informações a todo custo."
            }
        ]
    },
    {
        enunciado: "Após a introdução da nova tecnologia, conhecida como Inteligência Artificial, uma professora de tecnologia da escola decidiu criar uma série de aulas sobre o assunto. No final de uma das aulas, ela solicita que você elabore um trabalho sobre a aplicação da IA no ambiente escolar. Qual seria a sua reação?",
        alternativas: [
            {
                texto: "Conduzindo pesquisas para entender suas tradições e culturas",
                afirmacao: "Para você, a ética e a IA estão interligadas."
            },
            {
                texto: "Explorando como as tradições e culturas afetam nosso dia a dia.",
                afirmacao: "Você acredita que a influência das tradições e culturas é significativa em nossa vida cotidiana."
            }
        ]
    },
    {
        enunciado: "Com a inteligência artificial criando artistas totalmente virtuais—como músicas e obras de arte—e promovendo o consumo desenfreado, isso pode prejudicar a tradição e a cultura. Como podemos preservar a tradição e a cultura no contexto atual dominado pelas inteligências artificiais??",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Procurando informações na legislação de saúde.",
                afirmacao: "Você prefere o método tradicional de pesquisa, sempre citando fontes confiáveis"
            }
        ]
    },
    {
        enunciado: "Considerando que o consumo consciente é aquele em que o indivíduo adquire apenas o que é necessário, como a sociedade poderia adotar práticas de consumo consciente utilizando informações fornecidas pela inteligência artificial?",
        alternativas: [
            {
                texto: "Comparação entre as informações fornecidas pela inteligência artificial e as informações pessoais.",
                afirmacao: "Você acredita que tem opiniões bem fundamentadas, mas acaba se influenciando pelo que a IA apresenta."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
