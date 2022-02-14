import { Link } from "react-router-dom";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import scroll2 from "../Images/scroll2.jpg";
import scroll3 from "../Images/scroll3.jpg";
import scroll1 from "../Images/scroll1.jpg";  

function Category1() {
    return(
      
    <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5">
        <div class="col">
          <div class="card shadow-sm">
          <img src={image1}  width="100%" height="225"/>
            <div class="card-body">
              <p class="card-text">Exciting destination for adventurous travelers. Nothing less but the best and most unusual.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <Link to="/item1">
                    <button type="button" class="btn btn-outline-secondary">View</button>
                    </Link>
                </div>
                <p><b>50.99 EUR</b></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={scroll1}  width="100%" height="225"/>

            <div class="card-body">
              <p class="card-text">Exciting destination for adventurous travelers. Nothing less but the best and most unusual.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <p><b>90.99 EUR</b></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={scroll2}  width="100%" height="225"/>
            <div class="card-body">
              <p class="card-text">Exciting destination for adventurous travelers. Nothing less but the best and most unusual.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <p><b>50.99 EUR</b></p>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={scroll3}  width="100%" height="225"/>
            <div class="card-body">
              <p class="card-text">Exciting destination for adventurous travelers. Nothing less but the best and most unusual.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <p><b>90.99 EUR</b></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={scroll2}  width="100%" height="225"/>
            <div class="card-body">
              <p class="card-text">Exciting destination for adventurous travelers. Nothing less but the best and most unusual.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <p><b>90.99 EUR</b></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={scroll3}  width="100%" height="225"/>
            <div class="card-body">
              <p class="card-text">Exciting destination for adventurous travelers. Nothing less but the best and most unusual.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <p><b>50.99 EUR</b></p>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={image1}  width="100%" height="225"/>
            <div class="card-body">
              <p class="card-text">Exciting destination for adventurous travelers. Nothing less but the best and most unusual.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <p><b>50.99 EUR</b></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={scroll1}  width="100%" height="225"/>
            <div class="card-body">
              <p class="card-text">Exciting destination for adventurous travelers. Nothing less but the best and most unusual.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <p><b>90.99 EUR</b></p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  </div>

    )
}

export default Category1;