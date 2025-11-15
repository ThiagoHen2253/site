function pesquisacep(valor){
    var cep = valor.replace(/\D/g, ''); 
    if(cep != ""){
        let validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)){
            let inputs = document.querySelectorAll('.endereco');
            for(let i = 0; i < inputs.length ; i++){
                inputs[i].value = "..."
            }
             var script = document.createElement('script');
             script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
             document.body.appendChild(script);
        }else{
            alert("CEP invalido!!");
        }

    }
}

function meu_callback(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById('rua').value = conteudo.logradouro;
        document.getElementById('bairro').value = conteudo.bairro;
        document.getElementById('cidade').value = conteudo.localidade;
        document.getElementById('uf').value = conteudo.estado;
        document.getElementById('ibge').value = conteudo.ibge

    }
}