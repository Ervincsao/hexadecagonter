const sideLengthInput = document.querySelector('#sideLength')
const volumeInput = document.querySelector('#volume')
const calcButton = document.querySelector('#calcButton')

calcButton.addEventListener('click', () => {
    console.log('működik')
    startCalc()
})

function startCalc() {
    const sideLength = Number(sideLengthInput.value)
    const calcVolume = calcVolume(sideLength)
    volumeInput.value = volume
}

function calcVolume(sideLength) {
    4 * sideLength * Math.sqrt(2 + Math.sqrt(2));
    return volume.toFixed(2);
}