import "./Styles/App.css"
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
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
