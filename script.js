const addParagraph = () => {
    // Armazena o body da página
    const body = document.querySelector('body')

    // Armazena o texto desejado no novo paragráfo
    const text = document.querySelector('#newText')
    // Confere se há algum texto no input
    if(!text.value) return ''

    // Inicia a variável da classe selecionada para o elemento
    let selectedClass

    // Seleciona todos os input radio e faz um for each
    document.querySelectorAll('.radioBtn').forEach(btn => {
        // Caso o input esteja selecionado, o valor vai ser passado para a variável selectedClass
        if (btn.checked) selectedClass = btn.value
    })

    // Cria o novo elemento p
    const newElement = document.createElement('p')
    // Armazena o texto dentro do novo elemento p
    newElement.innerHTML = text.value

    // Verifica se tem uma classe selecionada, e se sim adiciona ela ao novo elemento
    if(selectedClass) {
        newElement.classList.add(selectedClass)
    }

    // Insere o novo elemento logo abaixo dos outros filhos de body
    body.appendChild(newElement)

    // Zera o input de texto
    text.value = ''
}

// Armazena o botão de adição
const addBtn = document.querySelector('.addBtn')

// Define um event listener pro botão
addBtn.addEventListener('click', addParagraph)