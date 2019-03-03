const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];
//console.log(comando);
switch (comando) {
    case 'listar':
        //console.log(argv);
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        //console.log(argv);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ', colors.blue(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Commando no reconocido');
}
//console.log(argv);

//const fs = require('express'); no es propia de node, se instala, no es nativo de node
//const fs = require('./fs'); son archivos que nostros escribimos

// console.log(multiplicar);
//let argv2 = process.argv;
//console.log('limite', argv.limite);
//console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(base);

//let base = 'a';