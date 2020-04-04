var inputBinario = document.querySelector("#binario");
var decimalInput = document.querySelector("#inteiro");

function conveter() {
   

    var decimal = decimalInput.value;


    if(decimal == ''){
        $("#alert").show()
        limpar();
        return;
    }

    inputBinario.value = dec2Bin(decimal);


}

function limpar() {
    decimalInput.value = '';
    inputBinario.value = '';

    decimalInput.focus();
}

function dec2Bin(dec) {
    var bin = (dec >>> 0).toString(2);;

    return bin;
}

function removeAlert(e){
    
    $("#alert").hide();

}

