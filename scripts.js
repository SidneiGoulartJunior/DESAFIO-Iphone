function trocaCor(cor) { //Criar uma função para trocar a cor
    let circulo = document.querySelector(".circulo") //criar uma variavel para chamar o HTML(document) com o querySelector
    circulo.style.background = cor //a mudança será no background do circulo, no style    
}
function trocaImg(imagem) {
    let imgIphone = document.querySelector(".foto-aparelho")
    imgIphone.src = imagem //agora a mudança é puxada no src, onde as imagens estão guardadas
}