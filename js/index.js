var inputBinario = document.querySelector("#binario");
var inteiroInput = document.querySelector("#inteiro");

function conveter() {
   

    var binario = inputBinario.value;


    if(binario == ''){
        $("#alert").show()
        limpar();
        return;
    }

    inteiroInput.value = bin2Dec(binario);


}

function limpar() {
    inteiroInput.value = '';
    inputBinario.value = '';

    inputBinario.focus();
}

function bin2Dec(bin) {
    var decimal = 0;

    for(var index = bin.length - 1; index >= 0; index --){
        decimal += parseInt(bin[index]) * Math.pow(2,bin.length - 1 - index);
    }

    return decimal;
}

function somentBinario(e){
    var tecla=(window.event)?e.key:e.which;
    if((tecla==1 || tecla==0)){
        $("#alert").hide()

        return true;
    } else{
        return false;
    }
}