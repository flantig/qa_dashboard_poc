import "./Styles/App.css"
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Routing from "./Components/Routing/Routing";
import {MyThemeContext} from "./Services/ThemeContext";
import {ThemeProviderParameter} from "./Styles/Pages/ThemeTest"
import {useEffect, useMemo, useState} from "react";
import {grommet, Grommet} from "grommet";
import {deepMerge} from "grommet/utils";

function App() {
    const [theme, setTheme] = useState(() => {
        const localData = localStorage.getItem('theme')
        return localData ? JSON.parse(localData) : true
    });
    const value = useMemo(() => ({theme, setTheme}), [theme]);
    const themeGrommet = deepMerge(grommet, ThemeProviderParameter)

    useEffect(() =>{
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])

    return (
        <MyThemeContext.Provider value={value}>
            <Grommet full background={"background-back"} theme={themeGrommet} themeMode={theme ? 'light' : 'dark'}>
                <Router>

                        <Navbar/>
                        <Routing/>
                </Router>
            </Grommet>
        </MyThemeContext.Provider>
    );
}

export default App;
