import React, {useContext, useEffect} from "react";
import {Button, Pane, Switch, ThemeProvider, Heading} from "evergreen-ui";
import {ThemeProviderParameter} from "../../Styles/Pages/Test1EG";
import {MyThemeContext} from "../../Services/ThemeContext";

function Test1() {
    const {theme, setTheme} = useContext(MyThemeContext);
    const [checked, setChecked] = React.useState(true)

    function switchHandler() {
        if (checked) {
            setTheme("dark")
            setChecked(!checked)
        } else {
            setTheme("light")
            setChecked(!checked)
        }
    }

    return (
        <React.Fragment>
            <Switch checked={checked} onChange={switchHandler}/>
            <ThemeProvider value={ThemeProviderParameter}>
                <Pane clearfix>
                    <Pane
                        elevation={0}
                        float="left"
                        backgroundColor="white"
                        width={200}
                        height={120}
                        margin={24}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Heading>Elevation 0 Test</Heading>
                        <Button appearance={theme}>{theme}</Button>
                    </Pane>
                    <Pane
                        elevation={1}
                        float="left"
                        appearance={theme}
                        width={200}
                        height={120}
                        margin={24}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Heading>Elevation 1 Test</Heading>
                        <Button appearance={theme}>{theme}</Button>
                    </Pane>
                </Pane>
            </ThemeProvider>
        </React.Fragment>
    )

}

export default Test1;