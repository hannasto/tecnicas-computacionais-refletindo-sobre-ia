// Renomeei os imports para refletir o novo contexto de Enigmas (do aleatorio.js) e Aventura (do perguntas.js)
// Assumindo que 'aleatorio.js' exporta um 'artefato' aleatório em vez de 'nome'
import { aleatorio, artefato } from './enigmas.js'; 
import { perguntas } from './aventura.js'; 

// Variáveis DOM permanecem as mesmas
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
// Renomeei 'historiaFinal' para 'diarioDeBordo' para se adequar ao contexto de exploração
let diarioDeBordo = "";

// Renomeei 'iniciaJogo' para 'iniciaMergulho'
botaoIniciar.addEventListener('click', iniciaMergulho);

function iniciaMergulho() {
    atual = 0;
    diarioDeBordo = ""; // Reseta o registro da missão
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
    mostraDesafio(); // Renomeei a função
}

// Renomeei 'mostraPergunta' para 'mostraDesafio'
function mostraDesafio() {
    if (atual >= perguntas.length) {
        mostraEpilogo(); // Renomeei a função
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    // Constrói o 'diarioDeBordo'
    diarioDeBordo += afirmacoes + " ";
    
    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
    } else {
        mostraEpilogo(); // Chama o resultado final
        return;
    }
    mostraDes