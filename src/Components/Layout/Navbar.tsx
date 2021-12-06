import {Link} from "react-router-dom";
import React, {useContext} from "react";
import "../../Styles/Layout/Navbar.css"
import {ThemeProviderParameter} from "../../Styles/Layout/NavbarEG";
import {Button, Grid, Box, ResponsiveContext} from "grommet";
import {MyThemeContext} from "../../Services/ThemeContext";
import {Actions, Moon} from "grommet-icons";


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

            <Grid columns={["small","large"]} rows={["xsmall"]} width="100%" areas={[{"name":"left","start":[0,0],"end":[0,0]},{"name":"right","start":[1,0],"end":[1,0]}]} justifyContent="center" gap="xlarge">
                <Box align="center" justify="center" border={{"color":"accent-1","size":"medium","style":"dashed"}} gridArea="left" direction="row">
                    <Button href={"/"} label="Dog" primary style={{"padding": "10% 20% 10% 20%", "borderRadius":"10px", "margin": "1%", fontSize:"200%"}}/>
                </Box>
                <Box align="center" justify="end" border={{"color":"accent-2","size":"medium","style":"dashed"}} gridArea="right" direction="row" pad="medium">
                    <Button onClick={switchHandler} icon={theme? <Actions color={"yellow"}/>: <Moon color={"white"}/>} />
                    <Button href={"/themetest"} label="ThemeTest" secondary style={{"padding": "1%", "borderRadius":"10px", "margin": "1%"}} />
                    <Button href={"/gridtest"} label="GridTest" secondary style={{"padding": "1%", "borderRadius":"10px", "margin": "1%"}} />
                    <Button href={"/singledog"} label="SingleDog" secondary style={{"padding": "1%", "borderRadius":"10px", "margin": "1%"}} />
                </Box>
            </Grid>

    )
}

export default Navbar;