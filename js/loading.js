const bg = document.querySelector('.bg')
const loadText = document.querySelector('.text')

let load = 0
let int = setInterval(blur, 30)


function blur() {
    load++
    loadText.innerText = `${load}%`
    if (load == 100) {
        clearInterval(int)
    }

    bg.style.filter = `blur(${30 - 0.3*load}px)`
    loadText.style.opacity = `$(1 - ${load}/100)`
}