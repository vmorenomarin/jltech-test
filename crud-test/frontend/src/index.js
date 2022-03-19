import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import axios from "axios";
import { BrowserRouter as Router}  from "react-router-dom";

axios.defaults.baseURL = "http://localhost:4000";

ReactDOM.render(
  <UserProvider>
    <React.StrictMode>
      {/* <Router> */}
        <App />
      {/* </Router> */}
    </React.StrictMode>
  </UserProvider>,
  document.getElementById("root")
);
