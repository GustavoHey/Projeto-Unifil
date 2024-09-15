const perguntas = [
    {
        pergunta: "What is the color of the sky?",
        respostas: ["Blue", "Red", "Green", "Yellow"],
        correta: 0
    },
    {
        pergunta: "How do you say 'cachorro' in English?",
        respostas: ["Cat", "Dog", "Fish", "Bird"],
        correta: 1
    },
    {
        pergunta: "What is 2 + 2?",
        respostas: ["3", "5", "6", "4"],
        correta: 3
    },
    {
        pergunta: "How do you say 'livro' in English?",
        respostas: ["Book", "Chair", "Pen", "Door"],
        correta: 0
    },
    {
        pergunta: "What animal says 'meow'?",
        respostas: ["Dog", "Cat", "Cow", "Sheep"],
        correta: 1
    },
    {
        pergunta: "How do you say 'gato' in English?",
        respostas: ["Dog", "Horse", "Pig", "Cat"],
        correta: 3
    },
    {
        pergunta: "What is 3 + 3?",
        respostas: ["5", "6", "7", "8"],
        correta: 1
    },
    {
        pergunta: "How do you say 'porta' in English?",
        respostas: ["Window", "Car", "Door", "Table"],
        correta: 2
    },
    {
        pergunta: "What is the opposite of 'big'?",
        respostas: ["Small", "Tall", "Large", "Wide"],
        correta: 0
    },
    {
        pergunta: "How do you say 'maçã' in English?",
        respostas: ["Banana", "Grape", "Orange", "Apple"],
        correta: 3
    }
];

let perguntaAtual = 0;
let progresso = 0;

function mostrarPergunta() {
    const perguntaElemento = document.getElementById("pergunta");
    const respostasElementos = document.querySelectorAll(".resposta a");

    perguntaElemento.innerText = perguntas[perguntaAtual].pergunta;
    respostasElementos.forEach((elemento, index) => {
        elemento.innerText = perguntas[perguntaAtual].respostas[index];
        elemento.onclick = () => verificarResposta(index);
    });
}

function verificarResposta(indice) {
    if (indice === perguntas[perguntaAtual].correta) {
        alert("Correct!");
    } else {
        const respostaCorreta = perguntas[perguntaAtual].respostas[perguntas[perguntaAtual].correta];
        alert(`Errado! A resposta correta era: ${respostaCorreta}`);
    }


    perguntaAtual++;
    progresso += 10; // adiciona 10%
    atualizarProgresso(); // atualiza o progresso

    // Salvar o progresso no Local Storage
    localStorage.setItem("quizProgress", progresso);

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        alert("Level 1 completed!");
        setTimeout(() => {
            window.location.href = "../paginas/níveis.html"; // pula de pagina
        }, 1200); // 1200 milissegundos = tempo pra pular de pagina
    }
}

function atualizarProgresso() {
    const barraProgresso = document.querySelector('.progress-overlay');
    const textoProgresso = document.querySelector('.barraprog p');
    barraProgresso.style.width = `${progresso}%`; // cresce a barra azul
    textoProgresso.innerText = `${progresso}%`; // aumenta a porcentagem
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Bloqueia o Enter
    }
});

mostrarPergunta();
