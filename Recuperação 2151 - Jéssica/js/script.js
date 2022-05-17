function calcularPedido(){
    //entrada
    corte = document.getElementById('corte').value;
    barba = document.getElementById('barba').value;
    depilaçao = document.getElementById('depilacao').value;

    //processamento
    //corte
    if (corte == "Tesoura"){
        imagem = "img/corteTesoura"
        precoCorte = "60.00";
    }
    else if (corte == "Maquina"){
        imagem = "img/maquina.jpg"
        precoCorte = "45.00";
    }
    else{
        imagem = "img/tesouraMaquina.jpg"
        precoCorte = "52.00";
    }

    //barba
    if (barba == "Simples"){
        imagem = "img/barbaSimples.jpg"
        precoBarba = "30.00";
    }
    else{
        preco = "45.00";
    }

    //depilacao
    if (depilacao == "Cera quente"){
        imagem = "img/depilacao.jpg"
        precoDepilacao = "300.00";
    }
    else if (depilacao == "Cera fria"){
        precoDepilacao = "250.00";
    }
    else{
        precoDepilacao = "850.00";
    }

    total = (precoCorte) + (precoBarba) + (precoDepilacao);

    //saida
    document.getElementById('total').value = total.toFixed(2);
    //document.getElementById('total').value = total.toFixed(2);
    //document.getElementById('foto').src = imagem;
    
}