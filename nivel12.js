 //ex 1 
 
 function ex1() {

    let nombre = ["L", "I", "U", "D", "M", "Y", "L", "A"];

    for (let letra of nombre) {
        console.log(letra);
    }
}
ex1();

function ex1str() {
    let nombreStr = "POLCHENKO";
    for (let i = 0; i < nombreStr.length; i++) {
        console.log(nombreStr[i]);

    }
}

// ex 2
function ex2(nombre) {
    const vocales = ["A", "O", "E", "I", "U",];
    const consonantes = ['B', 'C', 'Ç', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
    const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]


    nombre = nombre.toUpperCase();
    console.log(`Partim del nom ${nombre}`)
    for (let letra of nombre) {
        if (vocales.includes(letra)) {
            console.log(`He trobat la VOCAL: ${letra}`)
        }
        else if (consonantes.includes(letra)) {
            console.log(`He trobat la CONSONANT: ${letra}`)
        }
        else if (numeros.includes(letra)) {
            console.log(`Els noms de persones no contenen el numer0: ${letra}`)
        }
        else { console.log(`Els noms de persones no contenen: ${letra}`) }
    }
}

ex2('marina34');

// ex 3
function ex3(nombre) {
    nombre = nombre.toUpperCase();
    return arr = nombre.split('').reduce((map, car) => {
        map[car] = (map[car] || 0) + 1;
        return map;
    }, {});
}

console.log(ex3('Alexandra'));


// ex 4
function ex4(nombre, apellido) {
    if (typeof nombre === 'string') {
        nombre = nombre.split('');
    }
    if (typeof apellido === 'string') {
        apellido = apellido.split('');
    }
    console.log(nombre.concat(" ", apellido));
}
ex4(["L", "I", "U", "D", "M", "Y", "L", "A"], ["P", "O", "L", "C", "H", "E", "N", "K", "0"]);

ex4('Mila', 'Polchenko')

//nivel 2
function NivelDos(str) {

    let regexp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9._-]+)/gi;
    console.log(str.match(regexp));

}

let str = "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email";

NivelDos(str);