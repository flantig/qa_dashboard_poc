import React, {useEffect} from 'react';
import "./Styles/App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from "./Components/Routing/Navbar";
import Routing from "./Components/Routing/Routing";


function App() {


    return (
        <div className={"App-header"}>
            <Router>
                <div id="header">
                    <Navbar/>

                    <Routing/>

                </div>
            </Router>
        </div>
    );
}

export default App;
