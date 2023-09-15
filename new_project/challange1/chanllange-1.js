const calculadoraDeIdade = document.querySelector("#calculadora-de-idade");
const formularioDeIdade = document.querySelector("#container-formulario");
const resultadoDeIdade = document.querySelector("#resultado-idade");

formularioDeIdade.addEventListener('submit', function(event){
    event.preventDefault();
})

let idadeAno;
if (idadeAno < 2023 ){
    
}
else{
    resultadoDeIdade.innerHTML = "Valor do ano de nascimento inválido.";
}

let idadeMes;

if (idadeMes >= 1 && idadeMes <= 12){
    return 
}
else{
    resultadoDeIdade.innerHTML = "Valor do mês de nascimento inválido.";
}

let idadeDia;
if (idadeDia >= 1 && idadeDia <= 31){
    return 

}
else{
    
    resultadoDeIdade.innerHTML = "Valor do dia de nascimento inválido.";
}