
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from './App';
import Leaderboard from './Leaderboard'
import Navbar from './components/Navbar';

const Routes = () => {
    return (
        <div id="mainDiv" style={{ width: '100%' }}>
            <BrowserRouter>
                <Navbar />
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