import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";

function previewHighScore() {
    var array = getScoresArray();
    console.log(array[0])
    var text = '';
    if (array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            text = text.concat('Player : ' + array[i].name + ' Score ' + array[i].score + ' |');
        }
    } else {
        text = "No Scores yet, Let's be the first one!";
    }
   // HighScoreLabel.innerHTML = getScores();
}
function getScores() {
    var array = getScoresArray();
    var text = '';
    if (array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            text = text.concat('Player : ' + array[i].name + ' Score ' + array[i].score);
        }
    } else {
        text = "No Scores yet, Let's be the first one!";
    }
    return text;
}

function getScoresArray() {
    var values = [];
    var count = localStorage.getItem("count");
    for (var c = 1; c <= count; c++) {
        var obj = JSON.parse(localStorage.getItem("player" + c));
        if (obj !== undefined)
            values.push(obj);
        else {
            break;
        }
    }
    return values;
}
function HighScores() {
    return (
        <div>
            <div class="grid-x">
                <div class="column self-align-center">
                    <h2 class="row justify-content-center">High Scores:</h2>
                </div>
            </div>
            <div class="grid-x">
                <div class="column self-align-center">
                    <label id="highScoreValues"> </label>
                </div>

            </div>
            <div class="grid-x">
                <div class="cell">
                    <button type="button" class="button" id="backBtn">Back</button>
                </div>
            </div>
        </div>
    );
}

export default HighScores;