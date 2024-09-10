// import titulo from "./titulo.js"   
import {titulo,subtitulo} from "./titulo.js"

const app = () => {
    const divRoot = document.getElementById("root")
    titulo(divRoot, "Bienvenidos a su curso de React");
}

app();