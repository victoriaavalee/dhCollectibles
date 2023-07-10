const moduloImportado = require('./collectibles');

const hotToys = moduloImportado.importar('Hot Toys');
const bandai = moduloImportado.importar('Bandai');
const starWars = moduloImportado.importar('Star Wars');

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

let collectibles = {
    figuras: unifiedCollectibles,
    listFigures:function(){
        this.figuras.forEach(function(item){
            console.log(item);
        })
    },
    figuresByBrand: function(marca){
     return this.figuras.filter(figura => figura.marca==marca); 
  }
}

//todas las listas de las marcas de las figuras coleccionables.
collectibles.listFigures();

//marca Hot Toys
console.log(collectibles.figuresByBrand('Hot Toys'));
//marca Bandai
console.log(collectibles.figuresByBrand('Bandai'));
//marca Star Wars
console.log(collectibles.figuresByBrand('Star Wars'));