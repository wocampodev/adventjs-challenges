export default function contains(store, productSearched) {
  let isProductFound = false;
  const allProducts = Object.values(store);
  if (!allProducts.length) {
    isProductFound = false;
  } else {
    allProducts.forEach(element => {
      if (typeof element === 'string') {
        isProductFound = element === productSearched;
      }
      if (typeof element === 'object') {
        isProductFound = contains(element, productSearched);
      }
    });
  }
  return isProductFound;
}

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite'
    }
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta' // <- ¡Está aquí!
    }
  }
};

console.log(contains(almacen, 'camiseta')); // true

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
};

console.log(contains(otroAlmacen, 'gameboy')); // false
