const { createFile, listarTabla } = require('./multiply.js'); //.js is optional
const { argv } = require('./yargs_config/yargs');
const colors = require('colors');

let comando = argv._[0]; //"_" is the array where are stored the command line arguments

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        createFile(argv.base, argv.limite)
            .then(file => console.log(`File created: ${file}`.yellow))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//let base = 4;
//let argv = process.argv;
//let parametro = argv[2]; //Because position 0 is path of node and pos1 is path of current file
//let base = parametro.split('=')[1]