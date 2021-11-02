import "./Styles/App.css"
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Routing from "./Components/Routing/Routing";
import {MyThemeContext} from "./Services/ThemeContext";
import {createContext, useMemo, useState} from "react";

function App() {
    const [theme, setTheme] = useState('light');
    const value = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <MyThemeContext.Provider value={value}>
        <div className={theme}>
            <Router>
                <div id="header">
                    <Navbar/>
                    <Routing/>
                </div>
            </Router>
        </div>
        </MyThemeContext.Provider>
    );
}

export default App;
