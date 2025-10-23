function calcularIMC() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";
    let grau = "";

    if (imc < 18.5) {
        classificacao = "Magreza";
        grau = "0";
    } else if (imc < 25) {
        classificacao = "Normal";
        grau = "0";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
        grau = "I";
    } else if (imc < 40) {
        classificacao = "Obesidade";
        grau = "II";
    } else {
        classificacao = "Obesidade Grave";
        grau = "III";
    }

    document.getElementById("resultado").innerText =
        "Sua classificação é: " + classificacao + " (Grau " + grau + ")";
}