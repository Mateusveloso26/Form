const formCriar = document.getElementById('formCriar')
const novoInput = document.querySelectorAll('.novoInput')
const CriarMsgErro = document.querySelectorAll('.CriarMsgErro')

console.log('teste')
formCriar.addEventListener('submit', (event) => {
    event.preventDefault();
    validarNome();
    validarEmail();
    validarCpf();
    validarTelefone();
    validarSenha();
    compararSenha();
     
})

function inputErro(index) {
    novoInput[index].style.border = '3px solid #ef4444';
    CriarMsgErro[index].style.display = 'block';
}

function removerErro(index) {
    novoInput[index].style.border = '2px solid green';
    CriarMsgErro[index].style.display = 'none';
}

function validarNome() {
    if (novoInput[0].value.length < 3) {
        inputErro(0);
    }
    else {
        removerErro(0);
    }
}

function validarEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(novoInput[1].value)) {
        inputErro(1);
    }
    else {
        removerErro(1);
    }
}

function validarCpf() {
    if (novoInput[2].value.length < 11) {
        inputErro(2);
    }
    else {
        removerErro(2);
    }
}

function validarTelefone() {
    if (novoInput[3].value.length < 11) {
        inputErro(3);
    }
    else {
        removerErro(3);
    }
}

function validarSenha() {
    if (novoInput[4].value.length < 6) {
        inputErro(4);
    }
    else {
        removerErro(4);
    }
}

function compararSenha() {
    if (novoInput[4].value == novoInput[5].value && novoInput[5].value.length >= 6) {
        removerErro(5);
    }
    else {
        inputErro(5);
    }
}
