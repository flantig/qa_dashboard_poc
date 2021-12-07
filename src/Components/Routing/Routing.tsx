import {Route, Switch} from "react-router-dom";
import ThemeTest from "../Pages/ThemeTest";
import GridTest from "../Pages/GridTest";
import Doggo from "../Pages/Doggo";
import SingularDog from "../Pages/SingularDog";
import Reports from "../Pages/Reports";
import Utilities from "../Pages/Utilities";

function Routing(){
    return(
        <Switch>
            <Route path="/singledog">
                <SingularDog/>
            </Route>
            <Route path="/gridtest">
                <GridTest/>
            </Route>
            <Route path="/themetest">
                <ThemeTest/>
            </Route>
            <Route path="/dog">
                <Doggo/>
            </Route>
            <Route path="/utilities">
                <Utilities/>
            </Route>
            <Route path="/">
                <Reports/>
            </Route>
        </Switch>
    )
}

export default Routing;
