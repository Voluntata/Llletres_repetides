let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let result = document.getElementById('output');
let ex1Btn = document.getElementById('ex1Btn');
let ex2Btn = document.getElementById('ex2Btn');
let ex3Btn = document.getElementById('ex3Btn');
let ex4Btn = document.getElementById('ex4Btn');
let clear = document.getElementById('clear');
let result2 = document.getElementById('output2');
let nivel2Btn = document.getElementById('nivel2Btn');

clear.addEventListener('click', function () {
    if (result.firstChild) {
        result.removeChild(result.firstChild);
    }
})

// ex 1
ex1Btn.addEventListener(('click'), function () {
    result.innerHTML = "";
    let nombre1 = nombre.value;
    if (nombre1 == "") alert("Rellena el campo Nombre");
    let ul = document.createElement('ul');

    for (let i = 0; i < nombre1.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = nombre1[i];
        ul.appendChild(li);
    }
    result.appendChild(ul);
});

// ex 2
ex2Btn.addEventListener(('click'), function () {
    result.innerHTML = "";
    const vocales = ["A", "O", "E", "I", "U",];
    const consonantes = ['B', 'C', 'Ç', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
    const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    let nombre2 = nombre.value.toUpperCase();
    if (nombre2 == "") alert("Rellena el campo Nombre");
    let ul = document.createElement('ul');

    for (let letra of nombre2) {
        let li = document.createElement('li');
        if (vocales.includes(letra)) {
            li.innerHTML = `He trobat la VOCAL: ${letra}`;
        }
        else if (consonantes.includes(letra)) {
            li.innerHTML = `He trobat la CONSONANT: ${letra}`;
        }
        else if (numeros.includes(letra)) {
            li.innerHTML = `Els noms de persones no contenen el numero: ${letra}`;
        }
        else { li.innerHTML = `Els noms de persones no contenen: ${letra}`; }
        ul.appendChild(li);
    }
    result.appendChild(ul);
})


//ex 3
ex3Btn.addEventListener('click', function () {
    result.innerHTML = "";
    let nombre3 = nombre.value.toUpperCase();
    if (nombre3 == "") alert("Rellena el campo Nombre");
    let nomObject = ex3(nombre3);
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    for (const [key, value] of Object.entries(nomObject)) {
        let li = document.createElement('li');
        li.innerHTML = (`${key}: ${value}`);
        ul.appendChild(li);
    }
    result.appendChild(ul);
})


function ex3(nombre) {
    return arr = nombre.split('').reduce((map, index) => {
        map[index] = (map[index] || 0) + 1;
        return map;
    }, {})

}

// ex 4
ex4Btn.addEventListener(('click'), function () {
    let nombre4 = nombre.value;
    let apellido4 = apellido.value;
    if (nombre4 == "" || apellido4 == "") alert("Rellena los campos");
    result.innerHTML = ex4(nombre4, apellido4);
})

function ex4(nombre, apellido) {
    if (typeof nombre === 'string') {
        nombre = nombre.split('');
    }
    if (typeof apellido === 'string') {
        apellido = apellido.split('');
    }
    let outputText = nombre.concat(" ", apellido);
    return outputText;
}

//nivel 2

function NivelDos(str) {
    let regexp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9._-]+)/gi;
    console.log(str.match(regexp));
}

nivel2Btn.addEventListener(('click'), function () {

    let text = document.getElementById('textArea').value;
    result2.innerHTML = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9._-]+)/gi)
})

// let texto = "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email";
// console.log(texto);