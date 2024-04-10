const personagens = document.querySelectorAll(".personagem")

//adicionar clase selecionada do perseonagem

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        if(window.innerWidth < 450) {
            window.scroll({top: 0, behavior: "smooth"})
        }

        //verificar se ja exise um personagem
        removerSelecaoDoPersonagem()

        personagem.classList.add("selecionado");


        alterarImagemPersonagemSelecionado(personagem)

        // alterar o nome do personagem 

        alterarNomeDoPersonagemSelecionado(personagem)

        adicionarDescricaoDoPersonagem(personagem)
})
})

function adicionarDescricaoDoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById("descricao-personagem")
    descricaoPersonagem.innerText = personagem.getAttribute("data-description")
}

function alterarNomeDoPersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById("nome-personagem")
    nomePersonagem.innerText = personagem.getAttribute("data-name")
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector(".personagem-grande")
    const idPersonagem = personagem.attributes.id.value
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector(".selecionado")
    personagemSelecionado.classList.remove("selecionado")
}
