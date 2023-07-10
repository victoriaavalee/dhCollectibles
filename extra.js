let numeros=[1, 27, 33, 41, 58, 60, 74, 8, 94, 10];
let [ pos0, , pos2, , pos4] =numeros; 

let restoDeNumeros = (...numeros) => {
  let resto = [];
  for (let i in numeros) {
    if (numeros[i] != pos0 && numeros[i] != pos2 && numeros[i] != pos4) {
      resto.push(numeros[i]);
    }
  }
  return resto;
};

console.log("listado de todos los numeros");
console.log(numeros);

console.log("Valores de la posiciones:")
console.log("posicion 0 = "+pos0);
console.log("posicion 2 = "+pos2);
console.log("posicion 4 = "+pos4);

console.log("listado sin los numeros de las posicion anteriores:");
console.log(restoDeNumeros(...numeros));



let mascota = {
  nombre: 'Fito',
  tipoDeMascota: 'perro',
  color: 'canela',
  raza: 'caniche',
};
  
let { nombre, tipoDeMascota, color, raza } = mascota;
console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipoDeMascota}, de color: ${color} y su raza es: ${raza}.`);
