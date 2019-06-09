import React from "react";
import "./style.css";

function Title(props) {
  return (
    
    <div class="jumbotron jumbotron-fluid"  id="title-block">
  <div className="container">
    <h2>Clicky Game</h2>      
    <p>Click one of the images below to start</p>
  </div>

    <div id="scores">
    <p>Current Score: </p>
    <p>High Score: </p>

    </div>


</div>


);
}

export default Title;
