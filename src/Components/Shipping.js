import { useState } from "react";
import { Link } from "react-router-dom";
import image2 from "../Images/image2.jpg";
import image1 from "../Images/image1.jpg";

function Shipping() {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    const [total1, setTotal1] = useState(50.99);
    const [total2, setTotal2] = useState(90.99);
  
    const increment = () => {
      setCount1(count1 + 1);
      setTotal1((count1 + 1) * 50.99);
    };
  
    const decrement = () => {
      if (count1 === 1) {
        return;
      }
  
      setCount1(count1 - 1);
      setTotal1((count1 - 1) * 50.99);
    };
  
    const addCount2 = () => {
      setCount2(count2 + 1);
      setTotal2((count2 + 1) * 90.99);
    };
    const decrement2 = () => {
      if (count2 === 1) {
        return;
      }
  
      setCount2(count2 - 1);
      setTotal2((count2 - 1) * 90.99);
    };
  
    const totalAll = total1 + total2;
  
    const removeProduct = (event) => {
      event.target.closest(".productCart").remove();
      totalAll();
    };
  
    return (
      <div className="container">
  
        <div>
          {/* <div className="container"> */}
          <ul
            className="nav nav-pills mb-3 bg-dark border-rounded"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item border" role="presentation">
              <button
                className="nav-link tabs active"
                id="pills-product-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-product"
                type="button"
                role="tab"
                aria-controls="pills-product"
                aria-selected="true"
              >
                Products
              </button>
            </li>
            <li className="nav-item border" role="presentation">
              <button
                className="nav-link tabs"
                id="pills-address-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-address"
                type="button"
                role="tab"
                aria-controls="pills-address"
                aria-selected="false"
              >
                Address
              </button>
            </li>
            <li className="nav-item border" role="presentation">
              <button
                className="nav-link tabs"
                id="pills-summary-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-summary"
                type="button"
                role="tab"
                aria-controls="pills-summary"
                aria-selected="false"
              >
                Summary
              </button>
            </li>
          </ul>
  
          <div className="tab-content p-5" id="pills-tabContent">
            {/* Product TAB */}
            <div
              className="tab-pane fade show active"
              id="pills-product"
              role="tabpanel"
              aria-labelledby="pills-product-tab"
            >
              <table style={{ width: "100%" }}>
                <tr className="trTop">
                  <th></th>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th></th>
                </tr>
  
                <tr className="productCart">
                  <td>
                    <img
                      className=" img-fluid tdImage rounded"
                      src={image2}
                      style={{height: "150px"}}
                      alt="product image"
                    />
                  </td>
                  <td><b>Esi National Trail</b></td>
                  <td className="qF">
                    <span className="quantity">{count1}</span>
                    <button
                      onClick={decrement}
                      className=" btn btn-primary fw-bold btnMinus mx-1"
                    >
                      -
                    </button>
                    <button
                      onClick={increment}
                      className=" btn btn-primary fw-bold btnPlus"
                    >
                      +
                    </button>
                  </td>
  
                  <td>
                    <span className="price">50.99</span>
                    <span>EUR</span>
                  </td>
                  <td>
                    <span className="totalOneProduct">{total1.toFixed(2)}</span>
                    <span>EUR</span>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={removeProduct}
                      className=" btn btn-danger fw-bold remove"
                    >
                      X
                    </button>{" "}
                  </td>
                </tr>
  
                <tr className="productCart">
                  <td>
                    {" "}
                    <img
                      className=" img-fluid tdImage rounded
                      "
                      src={image1}
                      style={{height: "150px"}}
                      alt="product image"
                    />
                  </td>
                  <td><b>Neesi National Trail</b></td>
                  <td className="qB">
                    <span className="quantity">{count2}</span>
                    <button
                      onClick={decrement2}
                      className=" btn btn-primary fw-bold btnMinus mx-1"
                    >
                      -
                    </button>
                    <button
                      onClick={addCount2}
                      className=" btn btn-primary fw-bold btnPlus"
                    >
                      +
                    </button>
                  </td>
  
                  <td>
                    <span className="price">90.99</span>
                    <span>EUR</span>
                  </td>
                  <td>
                    <span className="totalOneProduct">{total2.toFixed(2)}</span>
                    <span>EUR</span>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={removeProduct}
                      className=" btn btn-danger fw-bold remove"
                    >
                      X
                    </button>{" "}
                  </td>
                </tr>
              </table>
  
              <h3 className="bigTotal text-end">
                Total: <span className="totalAll">{totalAll.toFixed(2)}</span> EUR
              </h3>
  
              <div className="epmty5"></div>
            </div>
  
            {/* Address TAB */}
            <div
              className="tab-pane fade"
              id="pills-address"
              role="tabpanel"
              aria-labelledby="pills-address-tab"
            >
              <div className="row mt-3" style={{ paddingLeft: "130px" }}>
                <div className="col-6">
                  <p>Shipping address</p>
                  <textarea
                    style={{
                      resize: "both",
                      height: "200px",
                      width: "300px",
                      magrin: "20px",
                    }}
                  />
                </div>
                <div className="col-6">
                  <p>Billing address</p>
                  <textarea
                    style={{
                      resize: "both",
                      height: "200px",
                      width: "300px",
                      magrin: "20px",
                    }}
                  />
                </div>
              </div>
  
              <div className="row my-5 " >
                <h3 className="bigTotal text-end">
                  Total: <span className="totalAll">{totalAll}</span> EUR
                </h3>
              </div>
            </div>
  
            {/* Summary TAB */}
            <div
              className="tab-pane fade"
              id="pills-summary"
              role="tabpanel"
              aria-labelledby="pills-summary-tab"
            >
              <div className="row mt-3">
                <div className="col-3">
                  <div className="mt-2">
                    <p className="fs-5">Shipping address:</p>
                    <div>
                      <div> Santai</div>
                      <div> Street 1</div>
                      <div> Riga</div>
                      <div> Latvia</div>
                    </div>
                  </div>
  
                  <div className="mt-2">
                    <p className="fs-5">Billing address:</p>
                    <div>
                      <div>Arī Santai</div>
                      <div> Street 1</div>
                      <div> Riga</div>
                      <div> Latvia</div>
                    </div>
                  </div>
                </div>
  
                <div className="col-9">
                  <table style={{ width: "100%" }}>
                    <tr className="trTop">
                      <th></th>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
  
                    <tr className="productCart">
                      <td>
                        <img
                          className=" img-fluid tdImage rounded"
                          src={image1}
                          style={{height: "150px"}}
                          alt="product image"
                        />
                      </td>
                      <td>Esi National Trail</td>
                      <td className="qF">
                        <span className="quantity">{count1}</span>
                        <button
                          onClick={decrement}
                          className=" btn btn-primary fw-bold btnMinus"
                        >
                          -
                        </button>
                        <button
                          onClick={increment}
                          className=" btn btn-primary fw-bold btnPlus mx-1"
                        >
                          +
                        </button>
                      </td>
  
                      <td>
                        <span className="price">50.99</span>
                        <span>EUR</span>
                      </td>
                      <td>
                        <span className="totalOneProduct">
                          {total1.toFixed(2)}
                        </span>
                        <span>EUR</span>
                      </td>
                    </tr>
  
                    <tr className="productCart">
                      <td>
                        <img
                          className=" img-fluid tdImage
                      "
                          src={image2}
                          style={{height: "150px"}}
                          alt="product image"
                        />
                      </td>
                      <td>Neesi National Trail</td>
                      <td className="qB">
                        <span className="quantity">{count2}</span>
                        <button
                          onClick={decrement2}
                          className=" btn btn-primary fw-bold btnMinus "
                        >
                          -
                        </button>
                        <button
                          onClick={addCount2}
                          className=" btn btn-primary fw-bold btnPlus mx-1"
                        >
                          +
                        </button>
                      </td>
  
                      <td>
                        <span className="price">90.99</span>
                        <span>EUR</span>
                      </td>
                      <td>
                        <span className="totalOneProduct">
                          {total2.toFixed(2)}
                        </span>
                        <span>EUR</span>
                      </td>
                    </tr>
                  </table>
                  <div className="row my-5 mx-5">
                    <h3 className="bigTotal text-end">
                      Total:{" "}
                      <span className="totalAll"> {totalAll.toFixed(2)}</span> EUR
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Shipping;