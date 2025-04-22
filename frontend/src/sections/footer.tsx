import { Link } from "react-router-dom";
import { facebook, instagram, linkedin, twitter, send } from "../assets/index";

const footerDetails = [
    {title: "COMPANY", details: [
        { to: "#", text: "About Us", },
        { to: "#", text: "Contact Us" },
        { to: "#", text: "Management Team" },
        { to: "#", text: "Careers" },
        { to: "#", text: "Customer Reviews" },
    ]},
    {title: "SOLUTIONS", details: [
        { to: "#", text: "Create Quotations", },
        { to: "#", text: "Internet service provider" },
        { to: "#", text: "Websites" },
        { to: "#", text: "Point of Sale Systems" },
        { to: "#", text: "Your request" },
    ]},
    {title: "SUPPORT", details: [
        { to: "#", text: "Help centre", },
        { to: "#", text: "Our fees" },
        { to: "#", text: "FAQs" },
        { to: "#", text: "Your account" },
        { to: "#", text: "How it works" },
    ]},
]

const Footer = () =>{
    return(
        <footer className="footer-section bg-dark-blue text-light">
        <div className="overlay pt-5 pb-5">
            <div className="container">
                <div className="row wrapper">
                    {footerDetails.map((det, i) =>(
                        <div key={i} className="col-lg-3 col-md-6 ">
                            <div className="single-area text-start">
                                <h4 className="mb-4">{det.title}</h4>
                                <ul className="items list-unstyled noto-sans-mono">
                                    {det.details.map((links, i) =>(
                                        <li key={i} className="pb-3">
                                            <Link className="link-light pb-5" to={links.to}>
                                                {links.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                    
                    <div className="col-lg-3 col-md-6">
                        <div className="single-area text-start">
                            <h5>Subscribe to our news</h5>
                            <p>Get the latest happenings and tips from EasyTech</p>
                            <form action="#" onSubmit={(e) => e.preventDefault()}>
                                <div className="subscribe d-flex justify-content-between">
                                    <input className="p-2" type="email" placeholder="Your Email Address"/>
                                    <button><img src={send} alt="icon"/></button>
                                </div>
                            </form>
                            <div className="social">
                                <ul className="d-flex list-unstyled ">
                                    <li><a href="#"><img src={facebook} alt="icon"/></a></li>
                                    <li><a href="#"><img src={twitter} alt="icon"/></a></li>
                                    <li><a href="#"><img src={instagram} alt="icon"/></a></li>
                                    <li><a href="#"><img src={linkedin} alt="icon"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="main-content">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-8 cus-order d-flex justify-content-md-start justify-content-center">
                            <div className="left-area">
                                <p className="mdr">EASYTECH © 2020. ALL RIGHTS RESERVED. <span>|</span> Written by &nbsp;
                                    <Link target="_blank" to="https://nyarangiportfolio.netlify.app/">Derrick</Link>
                                </p>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 col-md-4 d-flex justify-content-md-end justify-content-center">
                            <div className="right-area flex mr-10 ">
                               <FaCcVisa size={50} style={{marginRight: "30px"}}/>
                               <FaCcMastercard size={50} style={{marginRight: "30px"}}/>
                               <FaCcPaypal size={50}/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        

    </footer>
    )
}

export default Footer;