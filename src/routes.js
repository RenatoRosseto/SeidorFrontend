import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Pages/Home'
import NovoUsuario from './Pages/NovoUsuario'

import NoMatch from './Pages/404'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/novo-usuario" exact component={NovoUsuario} />
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
    )
}