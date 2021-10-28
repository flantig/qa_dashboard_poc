import {Link} from "react-router-dom";
import React from "react";
import "../../Styles/Routing/Navbar.css"
import {ThemeProviderParameter} from "../../Styles/Routing/NavbarEG";
import {Button, ThemeProvider} from "evergreen-ui";

function Navbar() {
    return (

        <div className={"Navbar-header"}>
            <ThemeProvider value={ThemeProviderParameter}>
                <Link to="/">
                    <Button className="nav-button" id="home-button">Home</Button>
                </Link>
                <Link to="/test1">
                    <Button className="nav-button" id="samplers-button">Test 1</Button>
                </Link>
            </ThemeProvider>
        </div>
    )
}

export default Navbar;