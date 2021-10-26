import React from "react";
import {Route, Switch} from "react-router-dom";
import Test1 from "../Pages/Test1";
import Doggo from "../Pages/Doggo";

function Routing(){
    return(

        <Switch>
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Route path="/test1">
                <Test1/>
            </Route>
            <Route path="/">
                <Doggo/>
            </Route>
        </Switch>
    )
}

export default Routing;