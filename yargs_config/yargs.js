const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: true,
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Prints to the console the multiplication table', opts)
    .command('crear', 'Creates the multiplication table in separate files', opts)
    .help()
    .argv;

module.exports = {
    argv
}