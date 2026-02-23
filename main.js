'use strict'

const botaoTrocarCor = document.getElementById('botao-trocar-cor')
const verde = document.getElementById('botao-verde')

function trocarCor() {
    const corUsuario = document.getElementById('cor-usuario').value
    document.documentElement.style.setProperty('--color-bg', corUsuario)
    if (corUsuario == 'vermelho') {
        document.documentElement.style.setProperty('--color-bg', 'red')
    } else if (corUsuario == 'carmesim') {
        document.documentElement.style.setProperty('--color-bg', 'crimson')
    } else if (corUsuario == 'marrom') {
        document.documentElement.style.setProperty('--color-bg', 'brown')
    } else if (corUsuario == 'roxo') {
        document.documentElement.style.setProperty('--color-bg', 'purple')
    } else {
        document.documentElement.style.setProperty('--color-bg', corUsuario)
    }
}

function botaoVerde(){
    document.documentElement.style.setProperty('--color-bg', 'green')
}
botaoTrocarCor.addEventListener('click', trocarCor)
verde.addEventListener('click', botaoVerde)
