const container = document.getElementById('container')
const colors = ['#F58A07', '#FF0054']
const SQUARES = 325

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
}

function setColor(element) {
    const color = colors[Math.floor(Math.random( ) * 5)]
    element.style.background = color
}

function removeColor(element) {
    element.style.background = '#dbdbdb'
}