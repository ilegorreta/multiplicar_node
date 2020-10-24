const fs = require('fs');
const colors = require('colors');

let createFile = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Error: ${base} is not a number`);
            return;
        }
        if (!Number(limite)) {
            reject(`Error: ${limite} is not a number`);
            return;
        }
        let data = ''
        for (let i = 1; i <= (limite / base); i++) {
            data += `${base} x ${i} = ${base*i} \n`;
        }

        fs.writeFile(`./tables/mult_table_${base}-until${limite}.txt`, `${data}`, (err) => {
            if (err) reject(err)
            else
                resolve(`mult_table_${base}-until${limite}.txt`)
        });
    });
}

let listarTabla = (base, limite) => {
    let data = ''
    for (let i = 1; i <= (limite / base); i++) {
        data += `${base} x ${i} = ${base*i} \n`;
    }
    console.log(data.green);
}

//Here we add the function to export in order to use it in app.js file
module.exports = {
    createFile,
    listarTabla
}