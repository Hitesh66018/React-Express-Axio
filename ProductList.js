import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>Price: ${p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
