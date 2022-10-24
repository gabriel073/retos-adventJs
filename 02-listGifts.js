// Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

// Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

// Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

const letter = 'bici coche balón _playstation bici coche peluche'

// Al ejecutar el método debería devolver lo siguiente:

// const regalos = listGifts(carta)

// console.log(regalos)

// {
//   bici: 2,
//   coche: 2,
//   balón: 1,
//   peluche: 1
// }

/*
hacer:
*1-Deshacer el string separando las palabras. 
*1- quitar si tiene mas de un espacio.
*2-descartar las palabras q contengan un _ adelante.
3-formar un objeto q contenga nombre del producto y la cant de veces repetido.
4-devolver dicho objeto.

*/
function listGifts(letter) {
    // ¡Tú puedes!

    let editor = letter.split(' ')

    for (let i = 0; i < editor.length; i++) {
        if (editor[i].charAt(0).includes("_")) {
            var result = editor.filter(char => char != editor[i])
        }
    }
    return result;

}


const regalos = listGifts(letter)

// console.log(regalos);

const resultado = {}
for (const el of regalos) resultado[el] = resultado[el] + 1 || 1

// const resultado = {}
// resultado = regalos.forEach(el => (regalos[el] = regalos[el] + 1 || 1))

 console.log(resultado);
return resultado;



