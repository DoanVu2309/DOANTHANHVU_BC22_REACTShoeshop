import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList(props) {
  const { products, onSelect } = props;
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-sm-4">
            <ProductItem product={product} />
            <button
              className="btn btn-success ml-3"
              data-toggle="modal"
              data-target="#product-card"
              onClick={() => onSelect(product)}
            >
              Chi Tiết
            </button>
          </div>
        );
      })}
    </div>
  );
}
