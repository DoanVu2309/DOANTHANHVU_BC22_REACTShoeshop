import React from "react";

export default function Modal(props) {
  const { product } = props;
  if (!product) {
    return "";
  }
  return (
    <div
      class="modal fade"
      id="product-card"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-5">
                <h3 className="text-center">{product.name}</h3>
                <img
                  src={product.image}
                  alt={product.name}
                  width="100%"
                  height="400px"
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông Tin Chi Tiết</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Tên gọi khác</td>
                      <td>{product.alias}</td>
                    </tr>
                    <tr>
                      <td>Giá bán</td>
                      <td>{product.price}</td>
                    </tr>
                    <tr>
                      <td>Mô tả</td>
                      <td>{product.description}</td>
                    </tr>
                    <tr>
                      <td>Mô tả ngắn</td>
                      <td>{product.shortDescription}</td>
                    </tr>
                    <tr>
                      <td>Số lượng</td>
                      <td>{product.quantity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
