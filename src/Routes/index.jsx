import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DashBoard from "../Pages/Dashboard";

function Routes(){
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/signup">
                <SignUp/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/dashboard/:id">
                <DashBoard/>
            </Route>
        </Switch>
    )
}

export default Routes;