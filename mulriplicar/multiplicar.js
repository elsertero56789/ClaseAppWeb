const fs = require('fs');
import crearArchivo from 'multiplicar/multiplicar.js'
const { resolve } = require('path');

let crearArchivo = (base) =>{
    return new Promise((resolve, reject) => {
        let data = '';

        for (let i = 0; i <= 10; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
            
        }
    })
}

fs.writeFile(`Tablas/tabla - ${base}.txt`, data, (err => {
    if(err)
    reject(err);
    else{
        resolve(`tabla - ${base}.txt`)
    }
}))
