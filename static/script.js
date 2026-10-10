

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
        nome: "abandoned house",
        ambiente: [
            "The windows were broken, and the wind made the doors creak.",
            "The floor was covered in dust and old photographs observed every movement.",
            "A stopped clock marked midnight, despite it still being eleven o'clock."
        ]
    },

    floresta: {
        nome: "dark forest",
        ambiente: [
            "The trees were so tall that they hid the moon.",
            "A thick fog covered the ground and hid everything within a few meters.",
            "The branches cracked behind you, even though there was no wind."
        ]
    },

    cemiterio: {
        nome: "ancient cemetery",
        ambiente: [
            "The gravestones were covered in moss and a cold fog hovered over the graves.",
            "A freshly dug grave stood out among the others.",
            "The iron gate closed by itself the moment you entered."
        ]
    },

    hospital: {
        nome: "abandoned hospital",
        ambiente: [
            "The corridors were dark and a door slammed in the distance.",
            "The lights flickered and an old monitor began to emit a strange sound.",
            "A wheelchair rolled down the corridor without anyone pushing it."
        ]
    },

    escola: {
        nome: "haunted school",
        ambiente: [
            "The classrooms were empty, but you could hear a group of students whispering.",
            "Your name appeared on the board, written by an invisible hand.",
            "The bell rang three times, even though the school had been closed for years."
        ]
    }
};


// 3. Descrições dos monstros

const monstros = {
    vampiro: {
        nome: "vampire",
        aparencia: [
            "A pale figure emerged from the darkness, with red eyes and a haunting smile.",
            "Two long shadows appeared on the wall before you could see the vampire.",
            "An elegant silhouette approached, revealing brilliant fangs in the light of the moon."
        ],
        acao: [
            "The vampire approached slowly and asked for your name.",
            "The vampire closed the only exit and turned off all the lights.",
            "The vampire pointed to a door and whispered that you shouldn't open it."
        ]
    },

    zombie: {
        nome: "zombie",
        aparencia: [
            "A zombie emerged dragging its feet, with empty eyes and outstretched hands.",
            "A rough groan echoed through the space and a staggering figure appeared.",
            "A creature covered in dirt rose slowly from the ground."
        ],
        acao: [
            "The zombie began to chase you, slamming into everything in its path.",
            "The zombie stopped suddenly and pointed to something behind you.",
            "The zombie knocked three times on a door that seemed to be locked from the inside."
        ]
    },

    fantasma: {
        nome: "fantasma",
        aparencia: [
            "A transparent figure emerged in the air, surrounded by a blue light.",
            "A pale figure appeared in the background, not touching the ground.",
            "A mysterious woman held a book covered in strange symbols."
        ],
        acao: [
            "The ghost pointed to a mirror where an unknown figure appeared.",
            "The ghost approached and showed you a memory that wasn't yours.",
            "The ghost disappeared, but its footsteps continued to be heard."
        ]
    },

    lobisomem: {
        nome: "lobisomem",
        aparencia: [
            "A huge creature emerged from the shadows, with sharp claws.",
            "A chilling howl made the windows tremble and two yellow lights appeared in the darkness.",
            "A furry silhouette rose slowly on all fours."
        ],
        acao: [
            "The werewolf ran towards you and blocked the path of retreat.",
            "The werewolf circled you in silence, waiting for the right moment.",
            "The werewolf suddenly retreated, as if it had recognized your face."
        ]
    },

    bruxa: {
        nome: "bruxa",
        aparencia: [
            "A witch with glowing eyes emerged next to a black candle.",
            "A cackle echoed and a hooded figure appeared in the middle of the mist.",
            "A mysterious woman held a book covered in strange symbols."
        ],
        acao: [
            "The witch spoke a spell and all the doors closed.",
            "The witch offered you a way out, but demanded something in return.",
            "The witch pointed to the ground, where your shadow began to move on its own."
        ]
    }
};


// 4. Descrições das personagens

const personagens = {
    estudante: {
        nome: "student",
        inicio: [
            "After classes, you decided to explore a place that everyone avoided.",
            "You were on your way home when you found a mysterious message.",
            "A bet with your friends led you to a forbidden place."
        ]
    },

    detetive: {
        nome: "detective",
        inicio: [
            "You were investigating a disappearance that no one could explain.",
            "You received an anonymous letter with a location written by hand.",
            "A clue found at a crime scene led you to that place."
        ]
    },

    explorador: {
        nome: "explorer",
        inicio: [
            "You were searching for a legendary place that didn't appear on any map.",
            "Your expedition got lost after an unexpected storm.",
            "You found a hidden passage and decided to investigate."
        ]
    },

    jornalista: {
        nome: "journalist",
        inicio: [
            "You were investigating a local legend to write an article.",
            "You received an anonymous recording with unexplainable sounds.",
            "A witness insisted that they needed to tell you the truth."
        ]
    },

    cientista: {
        nome: "scientist",
        inicio: [
            "You were following a lead about a failed experiment.",
            "An unknown signal led you to an isolated location.",
            "You were investigating a phenomenon that defied all known laws."
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
        titulo = "An Impossible Escape";

        fim = escolherAleatorio([
            "At the last moment, you found a secret passage and managed to escape. When you looked back, the creature had disappeared.",

            "A light appeared at the end of the corridor. You ran towards it and made it to the street just before the sun rose. You were safe... for now.",

            "You discovered that the monster was afraid of an ancient object you found on the ground. You seized the opportunity and fled."
        ]);
    }

    else if (tipoFinal === "assustador") {
        titulo = "The Last Scream";

        fim = escolherAleatorio([
            "You tried to run, but all exits were blocked. The last thing you heard was a whisper by your ear. The next morning, no one found any trace of you.",

            "The lights went out suddenly. You heard footsteps approaching, but couldn't see anyone. Then, absolute silence fell.",

            "You thought you had found the exit, but the door opened to the same corridor. Behind you, the creature began to laugh."
        ]);
    }

    else if (tipoFinal === "inesperado") {
        titulo = "Nothing was what it seemed";

        fim = escolherAleatorio([
            "When the creature removed the hood, you recognized your own face. Before you could react, it smiled and disappeared. In the mirror, however, your reflection continued to smile.",

            "You found a photograph of yourself on the ground, dated a hundred years ago. On the back, someone had written: «Finally you're back».",

            "The creature stopped and began to speak with your voice. You realized then that it knew all your secrets."
        ]);
    }

    else {
        titulo = "The mystery continues";

        fim = escolherAleatorio([
            "You found an open door and left without looking back. The next day, the place no longer existed on any map.",

            "When everything fell silent, you noticed a new message written on the wall: «This was only the beginning».",

            "You managed to escape, but a small mark appeared on your hand. Whenever the moon is full, the mark begins to glow."
        ]);
    }

    // Criar os parágrafos da história

    const paragrafos = [
        `It was a dark night when a ${personagem.nome} arrived at the ${local.nome}. ${inicio}`,

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

        copyStatus.textContent = "✓ History copied successfully!";
    }

    catch (erro) {
        copyStatus.textContent =
            "Automatic copying failed. Please select and copy the text manually..";
    }
});