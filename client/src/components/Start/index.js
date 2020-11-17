import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function About() {
    return (
        <div className="container-fluid">
            <div class="jumbotron">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4"></hr>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <ul className="nav flex-column mt-5 " >
                    <li className="nav-item">
                        <Link className="nav-link navLinks mb-5" to="/gallery">GALLERY</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navLinks mb-5" to="/services">SERVICES</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navLinks mb-5" to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navLinks mb-5" to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default About;