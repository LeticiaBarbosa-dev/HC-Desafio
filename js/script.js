const form = document.getElementById('form');

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('form');

    let done =  `<h2 id="success" style="color: white;">CADASTRO REALIZADO COM SUCESSO!💪</h2>`

    let message = document.getElementById('mensagem');

    let clean = `<p></p>`

    setTimeout(() =>{
        message.innerHTML = clean;
        content.innerHTML = done;
    },2000)
})