import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";

function Start() {
    return (
        <div className="container-fluid ">
            <div class="jumbotron ">
                <h1 class="display-4 mx-auto title">Trivial</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4"></hr>
                <ul className="nav mx-auto" >
                    <li className="nav-item">
                        <Link className="flex-sm-fill text-sm-center nav-link" to="/quiz">Start Quiz</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="flex-sm-fill text-sm-center nav-link" to="/highscores">High Scores</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Start;