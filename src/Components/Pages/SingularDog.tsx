import {DogService} from "../../Services/Dog.Service";
import React, {useEffect} from "react";
import "../../Styles/Pages/Doggo.css"
import {Dog} from "../../Models/Dog";
import {Button, Text, Heading, Card, CardHeader, CardBody, CardFooter, Image, Grid, Box, Menu} from "grommet";
//Button
const dogService: DogService = new DogService("https://random.dog/woof.json");

function SingularDog() {
    let [dogs, setdogs] = React.useState<Dog>({fileSize: "", url: ""});
    useEffect(() => {
        getDog()
    }, []);

    const getDog = () => {
        dogService.GET<Dog>().then(response => setdogs(response))
        console.log(dogs)
    }

    return (
        <Box align="center" justify="center" direction="row-responsive" wrap height="70%" width="100%">


            <Card height={"medium"} margin={"small"} background={{"color": "background-front"}}>
                <Heading level="2" size="small" textAlign="start" margin="small">
                    Dog Works Inc.
                </Heading>
                <CardBody pad="xsmall" align="center">
                    {
                        dogs.url !== ""
                            ? <Image fit={"contain"} src={dogs.url} height={"250px"} width={"250px"}/>
                            : <Image fit={"contain"}
                                     src="https://i.pinimg.com/originals/36/b1/6c/36b16cc68bbbca07f1c37183112de693.gif"/>
                    }
                </CardBody>
                <CardFooter align="center" direction="row" flex={false} justify="between" gap="medium"
                            pad="small" background={{"color": "background-contrast"}}>
                    <Button onClick={getDog} label="Click Me!" plain={false} size="medium"
                            style={{"padding": "10px"}}/>
                </CardFooter>
            </Card>


        </Box>
    );
}

export default SingularDog;