const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprimer en consola la tabla de modificar', opts)
    .command('crear', 'Crear Archivo de Tabla', opts)
    .help()
    .argv;


module.exports = {
    argv
}