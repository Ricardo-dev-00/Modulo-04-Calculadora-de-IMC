function calcularIMC() {
    // Endrada de dados
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("Altura").value);

    // Processamento
    let imc = peso / (altura * altura);

    // Classificação do IMC
    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Magreza";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    // Saida   
    document.getElementById("resultado").innerHTML = "SEU IMC É: " + imc + "<br>" + "(" + classificacao + ")";

}
