export const perguntas = [
    // PERGUNTA 0: Introdução à descoberta
    {
        enunciado: "Após meses de pesquisa de satélite, você descobriu sinais de um ecossistema completamente isolado e desconhecido no coração da Amazônia. Você prepara sua primeira expedição. Qual é a sua prioridade inicial?",
        alternativas: [
            {
                texto: "Garantir a segurança total: Levar drones de mapeamento avançado e equipamentos de monitoramento de saúde de ponta.",
                afirmacao: [
                    "Sua prioridade em segurança e tecnologia de mapeamento garante que a equipe evite perigos desconhecidos.",
                    "Demonstrou cautela e confiança nas ferramentas tecnológicas para mitigar riscos na selva."
                ],
                proxima: 1, // Leva para a pergunta 1 (Foco em Tecnologia/Mapeamento)
            },
            {
                texto: "Conservação máxima: A equipe deve ser mínima, leve, e focar apenas na coleta de dados não invasivos e amostras básicas.",
                afirmacao: [
                    "Seu respeito pelo meio ambiente garantiu uma incursão com impacto mínimo no ecossistema.",
                    "Focou em métodos tradicionais de observação, valorizando a experiência de campo sobre a tecnologia invasiva."
                ],
                proxima: 2, // Leva para a pergunta 2 (Foco em Conservação/Ética)
            },
        ]
    },
    // PERGUNTA 1: Ramificação do Foco em Tecnologia/Mapeamento
    {
        enunciado: "Seu mapeamento aéreo com drones revela uma espécie de planta com propriedades medicinais incríveis. Você precisa documentá-la para a comunidade científica. Qual a sua abordagem de coleta de dados?",
        alternativas: [
            {
                texto: "Usar um mini-laboratório portátil (tecnologia de IA) para analisar o DNA e as propriedades químicas da planta *in loco*, sem coletar amostras grandes.",
                afirmacao: [
                    "A utilização de tecnologia de campo permitiu análises rápidas e minimizou a extração de recursos da floresta.",
                    "Você defendeu a utilização de tecnologia para acelerar descobertas médicas e científicas de forma sustentável."
                ],
                proxima: 3,
            },
            {
                texto: "Seguir o protocolo padrão: Coletar amostras da planta e do solo para análise detalhada em laboratório, fora da área isolada.",
                afirmacao: [
                    "Sua abordagem tradicional garantiu a precisão científica, apesar do tempo de espera, priorizando a robustez dos dados.",
                    "Você sentiu que a coleta física era essencial para uma compreensão completa, desconfiando de análises rápidas no local."
                ],
                proxima: 4,
            },
        ]
    },
    // PERGUNTA 2: Ramificação do Foco em Conservação/Ética
    {
        enunciado: "Sua equipe encontra artefatos que sugerem a presença de uma tribo isolada na área. A prioridade é a conservação, mas a tribo pode precisar de assistência médica. O que você decide?",
        alternativas: [
            {
                texto: "Manter o isolamento total. O primeiro princípio é a não-contaminação cultural e biológica, mesmo com o risco de doença.",
                afirmacao: [
                    "O respeito pela autonomia e isolamento da tribo se tornou a sua principal diretriz ética na expedição.",
                    "Você defendeu o direito à autodeterminação, alertando a equipe sobre os perigos da intervenção externa."
                ],
                proxima: 3,
            },
            {
                texto: "Deixar suprimentos médicos e vacinas básicas em um local neutro, visível, mas sem tentar contato.",
                afirmacao: [
                    "Você conseguiu um equilíbrio entre conservação e responsabilidade humanitária, oferecendo ajuda de forma passiva.",
                    "Sua abordagem demonstrou preocupação com a saúde, sem comprometer o isolamento cultural da comunidade."
                ],
                proxima: 4,
            },
        ]
    },
    // PERGUNTA 3: Ramificação de Tecnologia/Ciência (Continuação)
    {
        enunciado: "A descoberta de um novo fungo com potencial biocombustível atrai a atenção de grandes corporações. Você precisa decidir como divulgar sua descoberta.",
        alternativas: [
            {
                texto: "Publicar todos os dados e coordenadas geográficas imediatamente em acesso aberto para acelerar a pesquisa global.",
                afirmacao: [
                    "Sua transparência impulsionou a inovação global, tornando a descoberta um recurso público para todos.",
                    "Você luta pela ciência aberta, garantindo que o conhecimento não seja monopolizado por interesses privados."
                ],
                proxima: 5, // Fim da cadeia: Foco em Inovação/Tecnologia Aberta
            },
            {
                texto: "Depositar uma patente provisória, atrasando a divulgação