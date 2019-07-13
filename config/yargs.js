const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea',
}



const argv = require('yargs')
    .command('crear', 'crear elemento por hacer', {
        descripcion
    })

    .command('actualizar', 'actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })

    .command('listar', 'lista elemento por hacer')

    .command('borrar', 'Borra una tarea por hacer', {
        descripcion
    })

    .help()
    .argv;

module.exports = {
    argv
}