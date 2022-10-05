let perguntas = document.querySelectorAll('.lista__item');
let respostas = document.querySelectorAll('.item__resposta');
let titulos = document.querySelectorAll('.item__pergunta');
let btns = document.querySelectorAll('.btn__pergunta');

    function addClasse () {
        respostas.forEach(resposta => {
            resposta.classList.add('escondido');
        });
    }

    function removerNegrito () {
        titulos.forEach(neg => {
            neg.classList.remove('negrito');
        })
    }

    function rodarSeta () {
        btns.forEach(num => {
            num.style.transform = 'rotate(0deg)';
        })
    }

        perguntas.forEach((pergunta, posicao) => {
            pergunta.addEventListener('click', function () {
                rodarSeta();
                btns[posicao].style.transform = 'rotate(180deg)';
                addClasse();
                respostas[posicao].classList.remove('escondido');
                removerNegrito();
                titulos[posicao].classList.add('negrito');  
            });
        })

