const inputs = document.querySelectorAll('.input')
const form = document.getElementById('form')
const msgErro = document.querySelectorAll('.erro')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validarEmail();
    validarSenha();


});

function inputErro(index) {
    inputs[index].style.border = '3px solid #ef4444';
    msgErro[index].style.display = 'block';
}

function removerErro(index) {
    inputs[index].style.border = '';
    msgErro[index].style.display = 'none';
}


function validarEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs[0].value)) {
        inputErro(0);
    }
    else {
        removerErro(0);
    }
}

function validarSenha() {
    if (inputs[1].value.length < 6) {
        inputErro(1);
    }
    else {
        removerErro(1);
    }
}
