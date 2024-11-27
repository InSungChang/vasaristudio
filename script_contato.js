document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = {
        nome: formData.get('nome'),
        sobrenome: formData.get('sobrenome'),
        email: formData.get('email'),
        celular: formData.get('celular'),
        mensagem: formData.get('mensagem')
    };

    fetch('https://formsubmit.co/ajax/vasaristudiocuritiba@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Mensagem enviada com sucesso!');
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        alert('Ocorreu um erro ao enviar a mensagem.');
        console.error('Erro:', error);
    });
});