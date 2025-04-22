import { useState } from "react";
import { logoIcon } from "../assets";
import { Link, replace, useNavigate } from "react-router-dom";
import { NavBarProps } from "./types";

const NavBar: React.FC<NavBarProps> = ({isLogin, setIsLogin}) =>{
    const navigate = useNavigate();
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleLogOut = () =>{
        sessionStorage.removeItem("user")
        sessionStorage.removeItem("userToken");
        setIsLogin(false);
        navigate("/", {replace:true});
    };

    return(
        <nav className="navbar navbar-expand-lg bg-success-subtle col-12">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logoIcon} alt="EasyTech" width="30" height="30"/>
                </a>
                <button onClick={() => setToggleMenu(!toggleMenu)} className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                     aria-controls="navbarSupportedContent" 
                    aria-expanded={toggleMenu} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${toggleMenu? "show" : " "} collapse navbar-collapse`} >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li> */}         
                    
                </ul>
                {/* <div >
                    {
                    isLogin? 
                        <span className="d-flex gap-3">
                            <Link className="btn btn-success" onClick={handleLogOut} to="#">Log Out</Link>
                            <Link className="btn btn-success" to="/change-pass" >Change Password</Link> 
                        </span> :
                        <span className="d-flex gap-3">
                            <Link className="btn btn-success" to="/login">Log In</Link> 
                            <Link className="btn btn-success" to="/signup">Sign Up</Link>
                        </span>
                    }
                </div> */}
                </div>
            </div>
        </nav>
    )
}

export default NavBar;