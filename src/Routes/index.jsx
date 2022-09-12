import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DashBoard from "../Pages/Dashboard";
import { useEffect, useState } from "react";

function Routes(){
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@Doit:token"))

        if(token){
            return setAuthenticated(true);
        }
    }, [authenticated])

    return (
        <Switch>
            <Route exact path="/">
                <Home authenticated={authenticated}/>
            </Route>
            <Route exact path="/signup">
                <SignUp authenticated={authenticated}/>
            </Route>
            <Route exact path="/login">
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </Route>
            <Route exact path="/dashboard">
                <DashBoard authenticated={authenticated}/>
            </Route>
        </Switch>
    )
}

export default Routes;