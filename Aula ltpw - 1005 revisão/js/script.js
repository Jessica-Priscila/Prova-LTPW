function calcularPedido(){
    //entrada
    sanduiche = document.getElementById('sanduiche').value;
    bebida = document.getElementById('bebida').value;
    batata = document.getElementById('batata').value;
    quantSanduiche = document.getElementById('quantSanduiche').value;
    quantBebida = document.getElementById('quantBebida').value;
    quantBatata = document.getElementById('quantBatata').value;
    

    //processamento
    //sanduiche
    if (sanduiche == "Big Mac"){
        imagem = "img/bigmac.jpg"
        precoSanduiche = "14.90";
    }
    else if (sanduiche == "Quarteirão"){
        imagem = "img/quarterao.jpg"
        precoSanduiche = "13.90";

    }
    else{
        imagem = "img/mcfish.jpg"
        precoSanduiche = "12.90"
    }

    //bebida
    if (bebida == "P"){
        precoBebida = "5.90";
    }
    else if (bebida == "M"){
        precoBebida = "6.90";

    }
    else{
        precoBebida = "7.90"
    }

    //batata
    if (batata == "P"){
        precoBatata = "5.90";
    }
    else if (batata == "M"){
        precoBatata = "6.90";

    }
    else{
        precoBatata = "7.90"
    }


    total = (quantSanduiche*precoSanduiche) + (quantBebida*precoBebida) + (quantBatata*precoBatata);

    //saida
    document.getElementById('total').value = total.toFixed(2);
    document.getElementById('foto').src = imagem;
}