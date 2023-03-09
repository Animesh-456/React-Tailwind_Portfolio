import React from "react";
//import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Footer() {
    return (
        // <footer className="footer">
            <div className="py-10 w-full bg-gradient-to-b from-gray-800 to-black text-white text-center">
                <hr className=" my-hr py-5" />
                <p className="footer-text">© 2023 Animesh Mondal</p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/your-name/" target="_blank" rel="noopener noreferrer">
                        {/* <i className="fab fa-linkedin-in"></i> */}
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/your-name" target="_blank" rel="noopener noreferrer">
                        {/* <i className="fab fa-github"></i> */}
                        <FaGithub />
                    </a>
                    <a href="https://twitter.com/your-name" target="_blank" rel="noopener noreferrer">
                        {/* <i className="fab fa-twitter"></i> */}
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com/your-name" target="_blank" rel="noopener noreferrer">
                        {/* <i className="fab fa-twitter"></i> */}
                        <FaFacebook />
                    </a>
                </div>
            </div>
        // </footer>
    );
}

export default Footer;
