import React, { Component } from 'react'
import data from './data.json'
import Modal from './Modal'
import ProductList from './ProductList'
export default class ShoesShop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: null,
    };
  }
  handleSelectProduct = (product) => {
    this.setState({ selectedProduct: product });
    console.log(product);
  };
    render() {
        return (
          <div className='container'>
            <h1 className='text-center'>Shoes Shop</h1>
            <ProductList products={data} onSelect={this.handleSelectProduct}/>
            <Modal product={this.state.selectedProduct}/>
          </div>
        )
      }
}
