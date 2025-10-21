// A lista agora contém nomes de estrelas e constelações notáveis
const estrelas = ["Sirius", "Vega", "Rigel", "Andrômeda", "Cygnus", "Canopus", "Centaurus"];

/**
 * Seleciona aleatoriamente um elemento de uma lista fornecida.
 * @param {Array<string>} lista - A lista de elementos (estrelas, neste contexto).
 * @returns {string} O elemento selecionado aleatoriamente.
 */
export function aleatorio (lista){
    // Calcula uma posição aleatória dentro do comprimento da lista
    const posicao = Math.floor(Math.random() * lista.length);
    // Retorna o elemento na posição aleatória
    return lista[posicao];
}

// Seleciona e exporta uma estrela aleatória da lista de estrelas
export const estrela = aleatorio(estrelas);