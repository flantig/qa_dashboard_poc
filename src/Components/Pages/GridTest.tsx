import React, {VFC} from "react";
import {Box, Button, Card, CardBody, CardFooter, Grid, GridSizeType, Heading, Image, ResponsiveContext} from "grommet";


interface Props {
    children: React.ReactNode;
    responsive: boolean;
    rows: GridSizeType | GridSizeType[] | undefined;
    columns: GridSizeType | GridSizeType[] | undefined;
    gap: string;
    areas: { xsmall: ({ name: string; start: number[]; end: number[] })[]; small: ({ name: string; start: number[]; end: number[] })[]; medium: ({ name: string; start: number[]; end: number[] })[]; middle: ({ name: string; start: number[]; end: number[] })[] };
}




const ResponsiveGrid: VFC<Props> = ({children, areas, ...props }) => {
    const size = React.useContext(ResponsiveContext) as "xsmall" | "small" | "medium" | "middle";
    return (
        <Grid areas={areas[size]} {...props}>
            {children}
        </Grid>
    );
};


export default function GridTest() {


    return (
        //Main pane will center the secondary child pane
        //Secondary child pane will determine when third child pane components start shifting down to the next row
        //Third child pane actually holds the functional components
        <ResponsiveContext.Consumer>
            {size => (
                <ResponsiveGrid
                    responsive= {true}
                    rows={['small', 'small', 'small', 'small']}
                    columns={['medium', 'medium']}
                    gap="medium"
                    areas={{
                        //mobile vertical layout
                        xsmall: [
                            { name: 'one', start: [0, 0], end: [0, 0] },
                            { name: 'two', start: [0, 1], end: [0, 1] },
                            { name: 'three', start: [0, 2], end: [0, 2] },
                            { name: 'four', start: [0, 3], end: [0, 3] },
                        ],
                        //same as medium, and xsmall but can be adjusted
                        small: [
                            { name: 'one', start: [0, 0], end: [1, 0] },
                            { name: 'two', start: [0, 1], end: [1, 1] },
                            { name: 'three', start: [0, 2], end: [1, 2] },
                            { name: 'four', start: [0, 3], end: [1, 3] },
                        ],
                        //same as small, and xsmall but can be adjusted
                        medium: [
                            { name: 'one', start: [0, 0], end: [1, 0] },
                            { name: 'two', start: [0, 1], end: [1, 1] },
                            { name: 'three', start: [0, 2], end: [1, 2] },
                            { name: 'four', start: [0, 3], end: [1, 3] },
                        ],
                        //window pane layout
                        middle: [
                            { name: 'one', start: [0, 0], end: [1, 0] },
                            { name: 'two', start: [1, 0], end: [1, 0] },
                            { name: 'three', start: [0, 1], end: [0, 1] },
                            { name: 'four', start: [1, 1], end: [1, 1] },
                        ]
                    }}
                >
                    <Box gridArea="one" background="green">
                        <Card height={"medium"} margin={"small"} background={{"color": "background-front"}}>
                        <Heading level="2" size="small" textAlign="start" margin="small">
                            Dog Works Inc.
                        </Heading>
                        <CardBody pad="xsmall" align="center">
                            {
                                <Image fit={"contain"}
                                             src="https://i.pinimg.com/originals/36/b1/6c/36b16cc68bbbca07f1c37183112de693.gif"/>
                            }
                        </CardBody>
                        <CardFooter align="center" direction="row" flex={false} justify="between" gap="medium"
                                    pad="small" background={{"color": "background-contrast"}}>
                            <Button label="Click Me!" plain={false} size="medium"
                                    style={{"padding": "10px"}}/>
                        </CardFooter>
                    </Card> </Box>
                    <Box gridArea="two" background="red" />
                    <Box gridArea="three" background="blue" />
                    <Box gridArea="four" background="cyan" />
                </ResponsiveGrid>
            )}
        </ResponsiveContext.Consumer>
    )

}