import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter as Router} from "react-router-dom";
import { ContextProvider } from "./Context";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <ContextProvider>
        <Router>
            <App/>
        </Router>
    </ContextProvider>
)
