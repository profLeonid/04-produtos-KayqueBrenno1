'use strict'

function adicionarProduto() {
    const codigo = document.getElementById('codigo')
    const produto = document.getElementById('produto')
    const quantidade = document.getElementById('quantidade')
    const lista = document.getElementById('lista')

    const spanCodigo = document.createElement('span')
    const spanProduto = document.createElement('span')
    const spanQuantidade = document.createElement('span')
    const div = document.createElement('div')

    if (codigo.value == '' || isNaN(codigo.value)) {
        alert('ERRO: VEJA SE O CÓDIGO FOI PREENCHIDO CORRETAMENTE')
        codigo.value = ''
    } else if (produto.value == '' || !isNaN(produto.value)) {
        alert('ERRO: VEJA SE O PRODUTO FOI PREENCHIDO CORRETAMENTE')
        produto.value = ''
    } else if (quantidade.value == '' || isNaN(quantidade.value)) {
        alert('ERRO: VEJA SE A QUANTIDADE FOI PREENCHIDA CORRETAMENTE')
        quantidade.value = ''
    } else {
        div.className = 'flex justify-center gap-2 w-full'

        spanCodigo.textContent = codigo.value
        spanCodigo.className = 'bg-purple-300 px-8 py-2 text-center border border-black rounded'

        spanProduto.textContent = produto.value
        spanProduto.className = 'bg-purple-300 px-8 py-2 text-center border border-black rounded'

        spanQuantidade.textContent = quantidade.value
        spanQuantidade.className = 'bg-purple-300 px-8 py-2 text-center border border-black rounded'

        div.appendChild(spanCodigo)
        div.appendChild(spanProduto)
        div.appendChild(spanQuantidade)
        lista.appendChild(div)


        codigo.value = ''
        produto.value = ''
        quantidade.value = ''
    }
}