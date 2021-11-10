import React, {useContext} from "react";
import {Button, Pane, Switch, ThemeProvider, Heading} from "evergreen-ui";
import {ThemeProviderParameter} from "../../Styles/Pages/ThemeTest";
import {MyThemeContext} from "../../Services/ThemeContext";

export default function ThemeTest() {
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
        <Pane
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Switch checked={checked} onChange={switchHandler}/>
            <ThemeProvider value={ThemeProviderParameter}>
                <Pane
                    clearfix
                    width={500}
                    height={500}
                    display="flex"
                    justifyContent="flex-start"
                    backgroundColor="green"
                    flexDirection="row">
                    <Pane
                        elevation={0}
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

                        backgroundColor="white"
                        appearance={theme}
                        width={200}
                        height={120}
                        margin={24}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Heading>Elevation 1 </Heading>
                        <Button appearance={theme}>{theme}</Button>
                    </Pane>

                </Pane>

            </ThemeProvider>
        </Pane>
    )

}
//test