function getDados(){
    let elementos = document.getElementsByName('happy');
    for( let i=0; i < elementos.length; i++){
        if(elementos[i].checked){
            document.getElementById('result').innerHTML = elementos[i].value;
        }
    }
    let drink = document.getElementById('drink');
    document.getElementById('fd').innerHTML = drink.value;
}


/*
function getDados(){
    let email = document.getElementById('email').value;
    window.alert("Olá! O email " + email + "for recebido");
}
    */