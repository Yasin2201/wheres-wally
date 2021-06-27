
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from './App';
import Leaderboard from './Leaderboard'

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" >
                        <App />
                    </Route>
                    <Route exact path="/leaderboard">
                        <Leaderboard />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes