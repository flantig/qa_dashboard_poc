import {Link} from "react-router-dom";
import React, {useContext} from "react";
import "../../Styles/Layout/Navbar.css"
import {ThemeProviderParameter} from "../../Styles/Layout/NavbarEG";
import {Button, ThemeProvider} from "evergreen-ui";
import {MyThemeContext} from "../../Services/ThemeContext";

function Navbar() {
    const {theme, setTheme} = useContext(MyThemeContext);

    return (

        <div className={"Navbar-header"}>
            <ThemeProvider value={ThemeProviderParameter}>
                <Link to="/">
                    <Button appearance={theme} id="home-button">Home</Button>
                </Link>
                <Link to="/test1">
                    <Button appearance={theme} id="samplers-button">Test 1</Button>
                </Link>
            </ThemeProvider>
        </div>
    )
}

export default Navbar;