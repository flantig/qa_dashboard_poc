import React, {useEffect} from "react";
import {Button, Pane, Switch, ThemeProvider} from "evergreen-ui";
import {ThemeProviderParameter} from "../../Styles/Pages/Test1EG";

function Test1() {


    return (
        <div>
            <Switch/>
            <ThemeProvider value={ThemeProviderParameter}>
                <Pane appearance="dark">Hi</Pane>
                <Button appearance="dark"> hello </Button>
            </ThemeProvider>

        </div>
    )

}

export default Test1;