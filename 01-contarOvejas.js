// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

// Por ejemplo, si tenemos las ovejas:

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas) {
    // aquí tu magia
 let filtradas = ovejas.map(obj => {
      if (obj.name.toLowerCase().trim().includes('n') && obj.name.toLowerCase().trim().includes('a') && obj.color === 'rojo'){
        // console.log('name:', obj.name, '\n' ,  'color:', obj.color);
        return({name: obj.name,  color: obj.color});
        }        
        return;
  })
  let filtradisima = filtradas.filter(function(x) {
    return x !== undefined;
});
    return filtradisima
  }
// Al ejecutar el método debería devolver lo siguiente:

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]