import React from "react";
import {Box, Grid} from "grommet";


export default function GridTest() {

    return (
        //Main pane will center the secondary child pane
        //Secondary child pane will determine when third child pane components start shifting down to the next row
        //Third child pane actually holds the functional components
        <Grid columns={["large","large"]} rows={["1/4","1/4",["small","medium"],["small","medium"]]} areas={[{"name":"leftcontent1","start":[0,2],"end":[0,2]},{"name":"navbar","start":[0,0],"end":[1,0]},{"name":"rightcontent1","start":[1,2],"end":[1,2]},{"name":"leftcontent2","start":[0,3],"end":[0,3]},{"name":"rightcontent2","start":[1,3],"end":[1,3]},{"name":"header","start":[0,1],"end":[1,1]}]}>
            <Box align="center" justify="center" background={{"dark":false}} height="100%" width="100%" gridArea="navbar" border={{"color":"accent-1","size":"medium","style":"dashed"}} />
            <Box align="center" justify="center" background={{"dark":false}} height="100%" width="100%" gridArea="header" border={{"color":"accent-2","size":"medium","style":"dashed"}} />
            <Box align="center" justify="center" height="100%" width="100%" gridArea="leftcontent1" border={{"color":"accent-3","size":"medium","style":"dashed"}} />
            <Box align="center" justify="center" height="100%" width="100%" gridArea="rightcontent1" border={{"color":"accent-4","size":"medium","style":"dashed"}} />
            <Box align="center" justify="center" height="100%" width="100%" gridArea="leftcontent2" border={{"color":"graph-4","size":"medium","style":"dashed"}} />
            <Box align="center" justify="center" height="100%" width="100%" gridArea="rightcontent2" border={{"color":"brand","size":"medium","style":"dashed"}} />
        </Grid>
    )

}