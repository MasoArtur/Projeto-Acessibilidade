document.addEventListener('DOMContentLoaded', function(){
    const btnAcessibilidade = document.getElementById('btn_acessibilidade');
    const opcAcessibilidade = document.getElementById('opc_acessibilidade');

    btnAcessibilidade.addEventListener("click", function(){
        btnAcessibilidade.classList.toggle('rotacao-botao');
        opcAcessibilidade.classList.toggle('apresenta-lista');
    });

    const aumentaFonteBtn = document.getElementById('aumentar_fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBtn.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1; //aumenta a fonte cada vez que clicar
        document.body.style.fontSize =  `${tamanhoAtualFonte}rem`;       //modifica o body do site
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const diminuiFonteBtn = document.getElementById('diminuir_fonte');

    let tamanhoAtualFonte = 1;

    diminuiFonteBtn.addEventListener('click', function() {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    }); 
});