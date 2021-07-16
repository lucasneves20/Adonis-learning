import React, { ReactElement } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../content/Home'

import "../styles/templates/content.scss"


export default function Content(): ReactElement {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
