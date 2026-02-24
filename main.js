'use strict'

function adicionarProduto() {
    const produto = document.getElementById('produto')
    const lista = document.getElementById('lista')

    const span = document.createElement('span')

    if (produto.value == '' || !isNaN(produto.value)) {
        alert('ERRO: CAMPOS NÃO FORAM PREENCHIDOS CORRETAMENTE!')
        produto.value = ''
    } else {
        span.textContent = produto.value
        span.className = 'bg-blue-200 px-8 py-2 text-center'

        lista.appendChild(span)
        produto.value = ''
    }
}