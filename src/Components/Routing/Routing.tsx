import {Route, Switch} from "react-router-dom";
import ThemeTest from "../Pages/ThemeTest";
import GridTest from "../Pages/GridTest";
import Doggo from "../Pages/Doggo";

function Routing(){
    return(
        <Switch>
            <Route path="/gridtest">
                <GridTest/>
            </Route>
            <Route path="/themetest">
                <ThemeTest/>
            </Route>
            <Route path="/">
                <Doggo/>
            </Route>
        </Switch>
    )
}

export default Routing;
