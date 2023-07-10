let fs = require("fs");

function importar (marca){
    let hotToys= require ('./datos/figuras1.json');
    let bandai=require('./datos/figuras2.json');
    let starWars=require('./datos/figuras3.json');
    switch(marca){
        case hotToys[0].marca:
            return hotToys;
            break;
        case bandai[0].marca:
            return bandai;
            break;
        case starWars[0].marca:
            return starWars;
            break;
        default:
            return "No se encontro la marca."
            break;
    }
}
module.exports = {importar};