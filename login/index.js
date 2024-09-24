function mudar() {
    var posicao = document.querySelector("div.container")

    if (posicao.style.flexFlow == "row-reverse") {
        posicao.style.flexFlow = "row"
    } else {
        posicao.style.flexFlow = "row-reverse"
    }
}