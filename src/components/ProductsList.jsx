import { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

export default function ProductsList() {
  const url = 'https://dummyjson.com/products';

  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((responsive) => responsive.json())
      .then((data) => {
        setProductsArr(data.products.slice(0, 10));
        console.log(data.products);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, []);

  function handleDelete(productId) {
    const filtered = productsArr.filter((product) => product.id !== productId);
    setProductsArr(filtered);
  }

  return (
    <div className='productList'>
      <ul className='grid'>
        {productsArr.map((productObject) => (
          <SingleProduct
            key={productObject.id}
            item={productObject}
            onDelete={() => handleDelete(productObject.id)}
          />
        ))}
      </ul>
    </div>
  );
}
