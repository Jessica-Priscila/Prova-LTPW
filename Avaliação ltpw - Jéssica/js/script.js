function calc(){
    //entrada
    tamanho = document.form.tamanho.value;

    //processamento
    if(tamanho == "pp"){
        valor = 100;
    }
    else if(tamanho == "p"){
        valor = 150;
    }
    else if(tamanho == "m"){
        valor = 200;
    }
    else{
        valor = 250;
    }
    //saida
    document.getElementById("total").value = valor;

    document.getElementById("ninho c/ morango").checked = false;
    document.getElementById("ninho c/ croc").checked = false;
    document.getElementById("prestigio").checked = false;
    document.getElementById("prestigio").checked = false;
    document.getElementById("frutas vermelhas").checked = false;
    document.getElementById("briga").checked = false;
    document.getElementById("leite").checked = false;
    document.getElementById("maracuja").checked = false;
}

function opcionais(valor,marcado){
    //entrada
    total = document.getElementById("total").value;
    
    //processamento
    if (marcado){
      total = Number(total) + Number(valor);
    }
    else{
      total = Number(total) - Number(valor);
      
    }
    
    //saida
    document.getElementById("total").value = total;
}