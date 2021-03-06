import React from "react";
import ReactDOM from "react-dom";
import Game from "./pages/game";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.min.js";

ReactDOM.render(<Game />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
