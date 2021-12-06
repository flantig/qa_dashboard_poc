import React, {useContext} from "react";
import {Button, Text, Heading, Card, Box, CardBody, CardFooter} from "grommet";
import {MyThemeContext} from "../../Services/ThemeContext";

export default function ThemeTest() {

    const {theme, setTheme} = useContext(MyThemeContext);

    function switchHandler() {
        if (theme) {
            setTheme(false)

        } else {
            setTheme(true)
        }
    }




    return (
        <Box align="center" justify="center" direction="row-responsive" wrap height="70%" width="100%">

            <Card height={"small"} width={"small"} background={"background-front"}>
                <CardBody align="center" justify="center"><Button primary
                                  alignSelf={"center"}
                                  onClick={switchHandler}>{theme ? <Text size={"xlarge"} >"light"</Text> : <Text size={"xlarge"}>"dark"</Text>}</Button></CardBody>
            </Card>
        </Box>
    )

}
//test