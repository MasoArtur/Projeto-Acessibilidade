document.addEventListener('DOMContentLoaded', function(){
    const btnAcessibilidade = document.getElementById('btn_acessibilidade');
    const opcAcessibilidade = document.getElementById('opc_acessibilidade');

    btnAcessibilidade.addEventListener("click", function(){
        btnAcessibilidade.classList.toggle('rotacao-botao');
        opcAcessibilidade.classList.toggle('apresenta-lista');
    });

    const aumentaFonteBtn = document.getElementById('aumentar_fonte');
    const diminuiFonteBtn = document.getElementById('diminuir_fonte');
    const alternarConstraste = document.getElementById('alternar_constraste');

    const btnSelecionado = btnAcessibilidade.getAttribute('aria-expanded') === 'true';
    btnAcessibilidade.setAttribute('aria-expanded', !btnSelecionado)

    let tamanhoAtualFonte = 1;

    aumentaFonteBtn.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1; //aumenta a fonte cada vez que clicar
        document.body.style.fontSize =  `${tamanhoAtualFonte}rem`;       //modifica o body do site
    });

document.addEventListener('DOMContentLoaded', function(){

    let tamanhoAtualFonte = 1;

    diminuiFonteBtn.addEventListener('click', function() {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    }); 
});
    alternarConstraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste');
    })



});

ScrollReveal().reveal('#inicio', { delay: 700 });
ScrollReveal().reveal('#tropicalia', { delay: 3000 });