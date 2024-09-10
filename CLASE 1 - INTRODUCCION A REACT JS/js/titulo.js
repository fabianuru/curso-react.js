const titulo = (divRoot,texto) => {

    const titulo = document.createElement("h1")
    titulo.innerText = texto

    divRoot.appendChild(titulo)
}

const subtitulo = () => {
    
}

// export default titulo --> cuando hay solo un componente

export { titulo, subtitulo}