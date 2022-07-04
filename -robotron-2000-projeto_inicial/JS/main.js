

const braco = document.querySelector("#braco");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const controle = document.querySelectorAll("[data-operation]");

console.log(estatisticas);

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

controle.forEach((elemento) =>{
    elemento.addEventListener("click", (evento) => {
       manipularDados(evento.target.dataset.operation,evento.target.parentNode);
       atualizarEstatisticas(evento.target.dataset.peca);
       console.log(evento.target.parentNode)
    });
});


function manipularDados(operacao,controle){
    let fatherElement = controle.querySelector("[data-contador]");

    if(operacao.trim().toLowerCase() === "+") {
        fatherElement.value = parseInt(fatherElement.value) + 1;
    } else if(operacao.trim().toLowerCase() === "-"){

        if(Number(fatherElement.value ) - 1 >= 0){
            fatherElement.value = Number(fatherElement.value) - 1;
        }
    }
}

function atualizarEstatisticas(peca){
    console.log(pecas[peca]);

    estatisticas.forEach((elemento) => {
        console.log(elemento.dataset.estatistica);
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}