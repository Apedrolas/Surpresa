const elementosMostrados = ['modal-background', 'modal-container'];
        let contadorCliques = 0;
        const cliquesNecessarios = 1; /*lembrar de alterar o valor dos cliques antes de finalizar o site*/

        function funcaoAbrirModal() {
            elementosMostrados.forEach(function(id) {
                const el = document.getElementById(id);
                if (el) {
                    el.style.display = 'block';
                }
                document.getElementById('modal-background').addEventListener('click', function() {
    document.getElementById('modal-background').style.display = 'none';
    document.getElementById('modal-container').style.display = 'none';
});
            });
        }

        function moverOuAbrir() {
            contadorCliques++;

            if (contadorCliques < cliquesNecessarios) {
                moverBotao();
            } else {
                funcaoAbrirModal();
            }
        }
        function moverBotao() {
            const botao = document.getElementById('abrirModal');

            const larguraJanela = window.innerWidth;
            const alturaJanela = window.innerHeight;

            const minLeft = 80;
            const maxLeft = larguraJanela - 80;

            const minBottom = 80;
            const maxBottom = alturaJanela - 80;

            const posLeftPx = Math.random() * (maxLeft - minLeft) + minLeft;
            const posBottomPx = Math.random() * (maxBottom - minBottom) + minBottom;

            botao.style.left = `${posLeftPx}px`;
            botao.style.bottom = `${posBottomPx}px`;
            botao.style.transform = 'translateX(0)'; 
        }
        function enviarMensagem() {
    let qntAma = Number(document.getElementById('lPercentage').value);
    let numeroNecessario = 10;

    if (qntAma < numeroNecessario) {
        alert('Número inválido, insira um número maior');
     } else{
        alert('Resposta correta! Mas eu te amo muito mais <3');
        }
    }
    function showText() {
    const poemCase = document.getElementById("poemCase");
    poemCase.style.display = "block";
    const modalBack2 = document.getElementById("modal-background2");
    modalBack2.style.display = "block";
}
document.getElementById('modal-background2').addEventListener('click', function() {
    document.getElementById('modal-background2').style.display = 'none';
    document.getElementById('poemCase').style.display = 'none';
});
 setInterval(() => {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-50px';
    heart.style.fontSize = '24px';
    heart.style.animation = 'fall 5s linear';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 300);
