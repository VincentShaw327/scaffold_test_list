import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {

  function handleAdd(id) {
    dispatch({
      type: 'products/add',
      payload: id,
    });
  }

  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }



  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onAdd={handleAdd} onDelete={handleDelete} products={products} />
    </div>
  );
};


// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);
