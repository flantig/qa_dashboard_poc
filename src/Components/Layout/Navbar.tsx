import {Link} from "react-router-dom";
import React, {useContext} from "react";
import "../../Styles/Layout/Navbar.css"
import {ThemeProviderParameter} from "../../Styles/Layout/NavbarEG";
import {Button, Grid, Box, ResponsiveContext, Header, Nav} from "grommet";
import {MyThemeContext} from "../../Services/ThemeContext";
import {Actions, Moon, Shield} from "grommet-icons";

const buttonStyle = {
    borderRadius: "5px",
    paddingTop: "10px"
}

function Navbar() {

    const {theme, setTheme} = useContext(MyThemeContext);

    function switchHandler() {
        if (theme) {
            setTheme(false)

        } else {
            setTheme(true)
        }
    }

    return (
            <Header background={"background-front"} pad={"small"}>
                <Button href ={"/"} icon={<Shield/>} hoverIndicator label={"ALBATROSS"} style={{borderRadius: "5px"}}/>
                <Nav direction={"row"}>
                    <Button onClick={switchHandler} icon={theme? <Actions color={"black"}/>: <Moon color={"white"}/>} />
                    <Button href={"/"} label="Reports" secondary style={buttonStyle}/>
                    <Button href={"/singledog"} label="Dashboard" secondary style={buttonStyle}/>
                    <Button href={"/utilities"} label="Utilities" secondary style={buttonStyle}/>
                </Nav>
            </Header>
    )
}

export default Navbar;
