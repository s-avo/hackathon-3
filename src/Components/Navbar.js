import { Link } from "react-router-dom";
import './Home.css';
import logo from "../Images/logo.png";

function Navbar() {
    return (
    
        <nav class="navbar navbar-light bg-dark p-3 mb-4">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="logo" width="55" height="50" class="d-inline-block align-text-center text-white" />
                        <span style={{color: "white", margin: 15}}><strong>Wilderness Walks</strong></span>
                </a>
                     <ul className="nav justify-content-end">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                     </li>
                         <li className="nav-item">
                       <Link className="nav-link" to="/catagories">CATEGORIES</Link>
                            </li>
                        <li className="nav-item">
                      <Link className="nav-link" to="/cart">CART</Link>
                        </li>
                    </ul>
            </div>
        </nav>
    )
}

export default Navbar;