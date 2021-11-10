import React from "react";
import {Pane} from "evergreen-ui";


export default function GridTest() {

    return (
        //Main pane will center the secondary child pane
        //Secondary child pane will determine when third child pane components start shifting down to the next row
        //Third child pane actually holds the functional components
        <Pane
            display="flex"
            alignItems="center"
            justifyContent="center">

            <Pane
                display="flex"
                flexWrap="wrap"
                width={600}
                height={500}
                borderStyle="dotted"
                borderColor="red"
                justifyContent="center"
            >

                <Pane
                    backgroundColor="white"
                    width={200}
                    height={120}
                    margin={24}>
                </Pane>

                <Pane
                    backgroundColor="white"
                    width={200}
                    height={120}
                    margin={24}>
                </Pane>

                <Pane
                    backgroundColor="white"
                    width={200}
                    height={120}
                    margin={24}>
                </Pane>

                <Pane
                    backgroundColor="white"
                    width={200}
                    height={120}
                    margin={24}>
                </Pane>

            </Pane>
        </Pane>
    )

}