window.onload = function() {
    // Recuperar o valor do progresso do Local Storage
    const progresso = localStorage.getItem("quizProgress") || 0; // Caso não exista, será 0

    // Atualizar a barra de progresso na nova página
    const barraProgresso = document.querySelector('.progress-overlay');
    const textoProgresso = document.querySelector('.barraprog p');
    
    barraProgresso.style.width = `${progresso}%`; // Define a largura da barra com o progresso
    textoProgresso.innerText = `${progresso}%`; // Atualiza o texto com a porcentagem
}
