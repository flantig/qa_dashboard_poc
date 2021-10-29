import {Route, Switch} from "react-router-dom";
import Test1 from "../Pages/Test1";
import Doggo from "../Pages/Doggo";

function Routing(){
    return(
        <Switch>
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
