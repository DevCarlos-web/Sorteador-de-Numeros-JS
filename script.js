const buttonSorteio = document.querySelector('.button-draw')
const drawnNumber = document.querySelector('.drawn-number')

function Sortear() {

    const min = Math.ceil(document.querySelector('.min').value)
    const max = Math.floor(document.querySelector('.max').value)

    if (max < min) {
        alert("O valor MÁXIMO deve ser maior que o valor MÍNIMO.");
        return; 
    }

    if (max == min) {
        alert("Coloque pelo menos dois valores diferentes!");
        return; 
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    drawnNumber.innerHTML = `O ganhador foi o número ${result}`;
}



buttonSorteio.addEventListener('click', Sortear)