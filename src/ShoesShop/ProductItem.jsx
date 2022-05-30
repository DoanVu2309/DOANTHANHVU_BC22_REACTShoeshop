import React from "react";

export default function ProductItem(props) {
  const { product} = props;
  return (
    <div>
      <img
        src={product.image}
        alt={product.name}
        className="card-img"
        width="100%"
        height="300px"
      />
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{product.name}</h5>
        <p className="card-text">${product.price}</p>
      </div>
    </div>
  );
}
