const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    if (Number(base) && Number(limite)) {
        console.log('================'.red);
        console.log(`tabla de ${base}`.red);
        console.log('================'.red);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }
    } else {
        console.log(`La base: ${base} ó el limite: ${limite} no es numérico`);
    }

};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (Number(base) && Number(limite)) {
            let data = '';
            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base * i} \n`;

            }

            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err) reject(err)
                else
                    resolve(`tabla-${base}.txt`);
                // console.log(`El archivo tabla${base}-txt ha sido creado`);
            });
        } else {
            reject(`La base: ${base} ó el limite: ${limite} no es numérico`)
            return;
        }

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}