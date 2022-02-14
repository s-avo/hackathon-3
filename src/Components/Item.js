import { useState } from "react";
import image1 from "../Images/image1.jpg";
import scroll1 from "../Images/scroll1.jpg";
import scroll2 from "../Images/scroll2.jpg";
import scroll3 from "../Images/scroll3.jpg";

function Item() {
    const images = [scroll3, scroll1, scroll2];
  
    const [BigImage, setImage] = useState(image1);
  
    const updateImage = (event) => {
      setImage(event.target.src);
    };
  
    const imagesList = images.map((imgElement) => {
      return (
        <div className="col-4 col-md-4">
          <img
            onClick={updateImage}
            className="imgRow"
            style={{ maxWidth: "100%", marginBottom: "10px" }}
            src={imgElement}
            alt=""
          />
        </div>
      );
    });
  
    return (
      <div>
        <div className="container">
          <div className="row p-3">
            <p style={{fontSize: 20}} className="text-center"><b>Esi National Park</b></p>
          </div>
  
          <div className="row mt-1">
            <div className="col-12 col-md-4">
              <div className="row">
                <div id="bigDiv">
                  <img
                    id="bigImage"
                    style={{
                      width: "250px",
                      height: " 300px",
                      marginLeft: "30px",
                    }}
                    src={BigImage}
                    alt=""
                  />
                </div>
              </div>
  
              <div className="row pt-3">{imagesList}</div>
            </div>
  
            <div className="col-10 col-md-8">
              <p className="p3">
                Where one or several ecosystems are not materially altered by human exploitation and occupation; where plant and animal species, geomorphological sites and habitats are of special scientific, educational and recreational interest or which contain a natural landscape of great beauty;
              </p>
              <p className="p3">
                Where the highest competent authority of the country has taken steps to prevent or eliminate as soon as possible exploitation or occupation in the whole area and to enforce effectively the respect of ecological, geomorphological or aesthetic features which have led to its establishment;
              </p>
              <p className="p3">
               Where the highest competent authority of the country has taken steps to prevent or eliminate as soon as possible exploitation or occupation in the whole area and to enforce effectively the respect of ecological, geomorphological or aesthetic features which have led to its establishment;
              </p>
              
                    <div class="card-body p-5">
                      <h4 class="card-title pricing-card-title text-right">
                        EUR 50.99
                      </h4>
  
                      <button
                        onClick={() => {
                         let message ='THANK YOU! THE WALK HAS BEEN ADDED TO THE CART.'
                         let confirmation = document.getElementById('confirmation')
                         let btn = document.getElementById('btn').disabled = true;
                          confirmation.textContent += message
                        }}
                        type="button"
                        className="w-30 btn btn-success fw-bold"
                        id="btn"
                      >
                        Add to cart
                      </button>
                      <p style={{color: "red"}} className="text-end fw-bold" id="confirmation"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
    );
  }
  export default Item;