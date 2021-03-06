import { Product } from '../model/product';

const products: Product[] = [
  {
    title: 'Sweat homme',
    description: '<C0D1NG_TH3_W0RLD> SWEATSHIRT CHAUD BIO À CAPUCHE - HOMME',
    photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png',
    price: 39,
    stock: 2
  },
  {
    title: 'Tee-Shirt homme',
    description: 'TEE-SHIRT BIO À COL ROND - HOMME',
    photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b2911e4ab33424aec592bd6/Mockups/front.png',
    price: 19,
    stock: 2
  },
  {
    title: 'Tee-Shirt femme',
    description: 'TEE-SHIRT BIO À COL ROND - FEMME',
    photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png',
    price: 19,
    stock: 2
  },
  {
    title: 'Tote bag',
    description: '<C0D1NG_TH3_W0RLD>, TOTE BAG BIO.',
    photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf160814006a7fe670e2dd/Mockups/front.png',
    price: 12.5,
    stock: 2
  }
];

export function getProductsFromNetwork(): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.9) {
        reject('Error 500 - the server failed');
      }
      resolve(products);
    }, 500);
  });
}
