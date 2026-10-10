"use strict";

// 1. Encontrar os elementos da página

const form = document.querySelector("#story-form");
const localSelect = document.querySelector("#local");
const monstroSelect = document.querySelector("#monstro");
const personagemSelect = document.querySelector("#personagem");
const finalSelect = document.querySelector("#final");

const storyBox = document.querySelector("#story");
const storyTitle = document.querySelector("#story-title");
const storyText = document.querySelector("#story-text");

const copyButton = document.querySelector("#copy-button");
const againButton = document.querySelector("#again-button");
const copyStatus = document.querySelector("#copy-status");


// 2. Descrições dos locais

const locais = {
    casa: {
        nome: "casa abandonada",
        ambiente: [
            "As janelas estavam partidas e o vento fazia as portas ranger.",
            "O chão estava coberto de pó e fotografias antigas observavam cada movimento.",
            "Um relógio parado marcava a meia-noite, apesar de ainda serem onze horas."
        ]
    },

    floresta: {
        nome: "floresta sombria",
        ambiente: [
            "As árvores eram tão altas que escondiam a lua.",
            "Uma névoa espessa cobria o chão e escondia tudo a poucos metros de distância.",
            "Os ramos estalavam atrás de ti, embora não houvesse vento."
        ]
    },

    cemiterio: {
        nome: "cemitério antigo",
        ambiente: [
            "As lápides estavam cobertas de musgo e uma névoa fria pairava sobre as campas.",
            "Uma campa acabada de abrir destacava-se entre as restantes.",
            "O portão de ferro fechou-se sozinho assim que entraste."
        ]
    },

    hospital: {
        nome: "hospital abandonado",
        ambiente: [
            "Os corredores estavam escuros e uma porta batia ao longe.",
            "As luzes piscavam e um monitor antigo começou a emitir um sinal sonoro.",
            "Uma cadeira de rodas atravessou o corredor sem que ninguém a empurrasse."
        ]
    },

    escola: {
        nome: "escola assombrada",
        ambiente: [
            "As salas estavam vazias, mas ouvia-se uma turma a sussurrar.",
            "No quadro apareceu o teu nome, escrito por uma mão invisível.",
            "O sino tocou três vezes, apesar de a escola estar fechada há anos."
        ]
    }
};


// 3. Descrições dos monstros

const monstros = {
    vampiro: {
        nome: "vampiro",
        aparencia: [
            "Uma figura pálida surgiu na escuridão, com olhos vermelhos e um sorriso inquietante.",
            "Duas sombras compridas apareceram na parede antes de conseguires ver o vampiro.",
            "Um vulto elegante aproximou-se, revelando presas brilhantes à luz da lua."
        ],
        acao: [
            "O vampiro aproximou-se lentamente e perguntou pelo teu nome.",
            "O vampiro fechou a única saída e apagou todas as luzes.",
            "O vampiro apontou para uma porta e sussurrou que não devias abri-la."
        ]
    },

    zombie: {
        nome: "zombie",
        aparencia: [
            "Um zombie surgiu a arrastar os pés, com os olhos vazios e as mãos estendidas.",
            "Um gemido rouco ecoou pelo espaço e uma figura cambaleante apareceu.",
            "Uma criatura coberta de terra levantou-se lentamente do chão."
        ],
        acao: [
            "O zombie começou a perseguir-te, batendo contra tudo pelo caminho.",
            "O zombie parou de repente e apontou para algo atrás de ti.",
            "O zombie bateu três vezes numa porta que parecia estar trancada por dentro."
        ]
    },

    fantasma: {
        nome: "fantasma",
        aparencia: [
            "Um vulto transparente surgiu no ar, rodeado por uma luz azulada.",
            "Uma figura pálida apareceu ao fundo, sem tocar no chão.",
            "Uma voz sussurrou o teu nome e uma silhueta atravessou a parede."
        ],
        acao: [
            "O fantasma apontou para um espelho onde aparecia uma figura desconhecida.",
            "O fantasma aproximou-se e mostrou-te uma memória que não era tua.",
            "O fantasma desapareceu, mas os seus passos continuaram a ouvir-se."
        ]
    },

    lobisomem: {
        nome: "lobisomem",
        aparencia: [
            "Uma criatura enorme surgiu entre as sombras, com garras afiadas.",
            "Um uivo arrepiante fez tremer as janelas e duas luzes amarelas apareceram na escuridão.",
            "Uma silhueta coberta de pelo levantou-se lentamente sobre duas patas."
        ],
        acao: [
            "O lobisomem correu na tua direção e bloqueou o caminho de regresso.",
            "O lobisomem rodeou-te em silêncio, à espera do momento certo.",
            "O lobisomem recuou de repente, como se tivesse reconhecido o teu rosto."
        ]
    },

    bruxa: {
        nome: "bruxa",
        aparencia: [
            "Uma bruxa de olhos brilhantes surgiu junto a uma vela negra.",
            "Uma gargalhada ecoou e uma figura encapuzada apareceu no meio da névoa.",
            "Uma mulher misteriosa segurava um livro coberto de símbolos estranhos."
        ],
        acao: [
            "A bruxa pronunciou uma palavra e todas as portas se fecharam.",
            "A bruxa ofereceu-te uma saída, mas exigiu algo em troca.",
            "A bruxa apontou para o chão, onde a tua sombra começou a mover-se sozinha."
        ]
    }
};


// 4. Descrições das personagens

const personagens = {
    estudante: {
        nome: "estudante",
        inicio: [
            "Depois das aulas, decidiste explorar um lugar que todos evitavam.",
            "Estavas a regressar a casa quando encontraste uma mensagem misteriosa.",
            "Uma aposta com os teus amigos levou-te até um lugar proibido."
        ]
    },

    detetive: {
        nome: "detetive",
        inicio: [
            "Estavas a investigar um desaparecimento que ninguém conseguia explicar.",
            "Recebeste uma carta anónima com uma morada escrita à mão.",
            "Uma pista encontrada numa cena de crime levou-te até ali."
        ]
    },

    explorador: {
        nome: "explorador",
        inicio: [
            "Procuravas um lugar lendário que não aparecia em nenhum mapa.",
            "A tua expedição perdeu-se depois de uma tempestade inesperada.",
            "Encontraste uma passagem escondida e decidiste investigar."
        ]
    },

    jornalista: {
        nome: "jornalista",
        inicio: [
            "Estavas a investigar uma lenda local para escrever uma reportagem.",
            "Recebeste uma gravação anónima com sons impossíveis de explicar.",
            "Uma testemunha insistiu que precisava de te contar a verdade."
        ]
    },

    cientista: {
        nome: "cientista",
        inicio: [
            "Seguias uma pista sobre uma experiência que tinha corrido mal.",
            "Um sinal desconhecido levou-te até um local isolado.",
            "Estavas a investigar um fenómeno que desafiava todas as leis conhecidas."
        ]
    }
};


// 5. Escolher um elemento aleatório

function escolherAleatorio(lista) {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}


// 6. Construir a história

function gerarHistoria() {
    const local = locais[localSelect.value];
    const monstro = monstros[monstroSelect.value];
    const personagem = personagens[personagemSelect.value];
    const tipoFinal = finalSelect.value;

    // Escolher frases diferentes em cada geração

    const inicio = escolherAleatorio(personagem.inicio);
    const ambiente = escolherAleatorio(local.ambiente);
    const aparencia = escolherAleatorio(monstro.aparencia);
    const acao = escolherAleatorio(monstro.acao);

    let titulo = "";
    let fim = "";

    // Escolher o desfecho

    if (tipoFinal === "feliz") {
        titulo = "Uma fuga impossível";

        fim = escolherAleatorio([
            "No último instante, encontraste uma saída secreta e conseguiste escapar. Quando olhaste para trás, a criatura tinha desaparecido.",

            "Uma luz surgiu ao fundo do corredor. Correste até ela e chegaste à rua mesmo antes de o sol nascer. Estavas a salvo... por agora.",

            "Descobriste que o monstro tinha medo de um objeto antigo que encontraste no chão. Aproveitaste a oportunidade e fugiste."
        ]);
    }

    else if (tipoFinal === "assustador") {
        titulo = "O último grito";

        fim = escolherAleatorio([
            "Tentaste fugir, mas todas as saídas estavam bloqueadas. A última coisa que ouviste foi um sussurro junto ao teu ouvido. Na manhã seguinte, ninguém encontrou qualquer vestígio teu.",

            "As luzes apagaram-se de repente. Ouviste passos a aproximarem-se, mas não conseguiste ver ninguém. Depois, fez-se um silêncio absoluto.",

            "Pensaste ter encontrado a saída, mas a porta abriu-se para o mesmo corredor. Atrás de ti, a criatura começou a rir."
        ]);
    }

    else if (tipoFinal === "inesperado") {
        titulo = "Nada era o que parecia";

        fim = escolherAleatorio([
            "Quando a criatura retirou o capuz, reconheceste o teu próprio rosto. Antes de conseguires reagir, ela sorriu e desapareceu. No espelho, porém, o teu reflexo continuava a sorrir.",

            "Encontraste uma fotografia tua no chão, datada de cem anos antes. No verso, alguém tinha escrito: «Finalmente voltaste».",

            "A criatura parou e começou a falar com a tua voz. Percebeste então que ela conhecia todos os teus segredos."
        ]);
    }

    else {
        titulo = "O mistério continua";

        fim = escolherAleatorio([
            "Encontraste uma porta aberta e saíste sem olhar para trás. No dia seguinte, o lugar já não existia em nenhum mapa.",

            "Quando tudo ficou em silêncio, reparaste numa nova mensagem escrita na parede: «Isto foi apenas o começo».",

            "Conseguiste sair, mas uma pequena marca apareceu na tua mão. Sempre que a lua fica cheia, a marca começa a brilhar."
        ]);
    }

    // Criar os parágrafos da história

    const paragrafos = [
        `Era uma noite sombria quando um ${personagem.nome} chegou à ${local.nome}. ${inicio}`,

        ambiente,

        aparencia,

        acao,

        fim
    ];

    return {
        titulo: titulo,
        paragrafos: paragrafos
    };
}


// 7. Mostrar a história no site

function mostrarHistoria() {
    const historia = gerarHistoria();

    storyTitle.textContent = historia.titulo;

    // Apagar os parágrafos da história anterior

    storyText.replaceChildren();

    // Criar um parágrafo HTML para cada parte da história

    historia.paragrafos.forEach(function(texto) {
        const paragrafo = document.createElement("p");

        paragrafo.textContent = texto;

        storyText.appendChild(paragrafo);
    });

    // Mostrar a caixa da história

    storyBox.hidden = false;

    copyStatus.textContent = "";

    // Deslocar a página até à história

    storyBox.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// 8. Criar a história quando o formulário é enviado

form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    mostrarHistoria();
});


// 9. Gerar outra história com as mesmas escolhas

againButton.addEventListener("click", function() {
    mostrarHistoria();
});


// 10. Copiar a história

copyButton.addEventListener("click", async function() {
    const titulo = storyTitle.textContent;
    const texto = storyText.innerText;

    const conteudo = `${titulo}\n\n${texto}`;

    try {
        await navigator.clipboard.writeText(conteudo);

        copyStatus.textContent = "✓ História copiada com sucesso!";
    }

    catch (erro) {
        copyStatus.textContent =
            "Não foi possível copiar automaticamente. Seleciona e copia o texto manualmente.";
    }
});