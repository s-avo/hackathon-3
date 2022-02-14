import image1 from "../Images/image1.jpg";
import scroll3 from "../Images/scroll3.jpg";
import scroll1 from "../Images/scroll1.jpg";
import scroll2 from "../Images/scroll2.jpg";

function CatagoriesSection() {
    return (
        <div>
            <div classNameName="container p-4">
        <h2 className="mb-3 p-3"><i>Categories</i></h2>
    </div>

      <div className="container pb-5">
        <div className="row">
            <div className="col-2">
              <img src={scroll3} width="100%" height="150"/>
            </div>
          <div className="col-2">
            <a href = "product.html" id= "section-link"><b>TRAILS</b></a> <br />
            Exciting destination for adventurous travelers. Nothing less but the best and most unusual.
          </div>
            <div className="col-2">
              <img src={scroll1} width="100%" height="150"/>
            </div>
          <div className="col-2">
            <a href = "product1.html" id= "section-link"><b>PARKS</b></a> <br />
            Exciting destination for adventurous travelers. Nothing less but the best and most unusual.
          </div>
            <div className="col-2">
              <img src={scroll2} width="100%" height="150"/>
            </div>
          <div className="col-2">
            <a href = "product2.html" id= "section-link"><b>LAKES</b></a> <br />
            Exciting destination for adventurous travelers. Nothing less but the best and most unusual.
          </div>
        </div>
      </div>
        </div>
    )
}

export default CatagoriesSection;