const limSuperior = document.getElementById('limSuperior')
const limInferior = document.getElementById('limInferior')
const objetivo = document.getElementById('objetivo')
const error = document.getElementById('error')
const form = document.getElementById('form')
const resultButton = document.getElementById('result-btn')
const iteraciones = document.getElementById('iteraciones')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    aproximarPuntoMedio(parseFloat(limSuperior.value), parseFloat(limInferior.value), parseFloat(objetivo.value), parseFloat(error.value)); //Mandar inputs converidos a numeros
})

const aproximarPuntoMedio = (limSuperior, limInferior, objetivo, error) => {
    let resultado = undefined;
    let counter = 0;
    let difConSuperior = 0;
    let difConInferior = 0;
    while(!(resultado >= (objetivo - error) && resultado <= (objetivo + error)) || resultado === undefined){ // Mientras el resultado no este entre el rango de error del objetivo
        counter+=1;
        console.log("ITERACION", counter);
        resultado = (limSuperior+limInferior)/2;
        console.log("Limite Superior", limSuperior, "Limite Inferior", limInferior, "RESULTADO", resultado)

        // if (resultado === objetivo){
        //     break
        // }
        // else {
        //     difConSuperior = Math.abs(objetivo - limSuperior)
        //     difConInferior = Math.abs(objetivo - limInferior)
        //     console.log("Con superior", difConSuperior, "Con inferior", difConInferior)
        //     if(difConSuperior >= difConInferior)
        //         limSuperior = resultado
        //     else
        //         limInferior = resultado
        // }
        if (resultado === objetivo)
            break
        if(resultado > objetivo)
            limSuperior = resultado
        else if (resultado < objetivo)
            limInferior = resultado

    }
    console.log("ITERACIONES", counter);
    resultButton.innerHTML = `Calcular Resultado: ${resultado}` 
    iteraciones.innerHTML = `Iteraciones: ${counter}` 
}