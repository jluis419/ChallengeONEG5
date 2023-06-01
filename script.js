const mensajeEntrada = document.querySelector(".mensajeEntrada");
const mensajeSalida = document.querySelector(".mensajeSalida");
const copia = document.querySelector(".copiar");

//Las "llaves" de encriptación que utilizaremos son las siguientes:
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(mensajeEntrada.value);
    mensajeSalida.value = textoEncriptado;
    mensajeEntrada.value="";
    mensajeSalida.style.backgroundImage="none";
}

function encriptar(stringencriptada){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringencriptada = stringencriptada.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringencriptada.includes(matrizcodigo[i][0])){
            stringencriptada= stringencriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);

        }
    }
    return stringencriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(mensajeEntrada.value);
    mensajeSalida.value = textoEncriptado;
    mensajeEntrada.value="";
    mensajeSalida.style.backgroundImage="none";
}

function desencriptar(stringencriptada){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringencriptada = stringencriptada.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringencriptada.includes(matrizcodigo[i][1])){
            stringencriptada = stringencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
        }
    }
    return stringencriptada
}

function copiar(){
    mensajeSalida.select();
    navigator.clipboard.writeText(mensajeSalida.value)
    mensajeSalida.value = "";
    alert("Texto Copiado")
}