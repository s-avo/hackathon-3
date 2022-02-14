import { Link } from "react-router-dom";
import image1 from "../Images/image1.jpg";
import scroll3 from "../Images/scroll3.jpg";
import scroll2 from "../Images/scroll2.jpg";

function Catagories() {
    return (
        <div>
            <div className="row pb-4">
            <div className="col">
                <h1 className="mb-5">Categories</h1>
            </div>
            <div className="container mb-4 bg-light">
                <div className="row">
                        <div className="col-4">
                            <img src={image1} height="200px" />
                        </div>
                        <div className="col-8">
                            <Link style={{color: "black"}} className="nav-link" to="/category1">TRAILS</Link>
                            <p>Where one or several ecosystems are not materially altered by human exploitation and occupation; where plant and animal species, geomorphological sites and habitats are of special scientific, educational and recreational interest or which contain a natural landscape of great beauty.</p>
                        </div>
                    </div>
                </div>
        
            <div className="container mb-4 bg-light">
                <div className="row">
                        <div className="col-4">
                            <img src={scroll3} height="217px"/>
                        </div>
                        <div className="col-8">
                            <Link style={{color: "black"}} className="nav-link" to="/">PARKS</Link>
                            <p>Where one or several ecosystems are not materially altered by human exploitation and occupation; where plant and animal species, geomorphological sites and habitats are of special scientific, educational and recreational interest or which contain a natural landscape of great beauty.</p>
                        </div>
                    </div>
                </div>
                <div className="container mb-3 bg-light">
                <div className="row">
                        <div className="col-4">
                            <img src={scroll2} height="217px" />
                        </div>
                        <div className="col-8">
                            <Link style={{color: "black"}} className="nav-link" to="/">LAKES</Link>
                            <p>Where one or several ecosystems are not materially altered by human exploitation and occupation; where plant and animal species, geomorphological sites and habitats are of special scientific, educational and recreational interest or which contain a natural landscape of great beauty.</p>
                        </div>
                </div>
            </div>
        </div>
        </div>    
    )
}


export default Catagories;