const form = document.getElementById('form');
const messageEmail = document.querySelector('#message-email');
const messageName = document.querySelector('#message-nome');
const message = document.querySelector('#message-alert');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');

    if(nome.value != '' && email.value != ''){
        const data = {
            nome,
            email,
        }
        let convertData = JSON.stringify(data);
        localStorage.setItem('storage', convertData);
        setTimeout(() =>{
            message.innerHTML = "Cadastro realizado com sucesso!";
            nome.value = "";
            email.value = "";
        }, 2000);
        
    }else{
        if(nome.value == '' && email.value == ''){
            message.innerHTML = 'Preencha os campos acima!';
            setTimeout(() => {
                message.innerHTML = '';
            }, 900);
        }else if(email.value == ''){
            messageEmail.innerHTML = '*Email obrigatório!';
            setTimeout(() => {
                messageEmail.innerHTML = '';
            }, 900);
        }else if(nome.value == '') {
            messageName.innerHTML = '*Nome obrigatório!';
            setTimeout(() => {
                messageName.innerHTML = '';
            }, 900);
        }
    }
})