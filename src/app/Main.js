import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipesPage from './Recipes/RecipesPage'

import AboutPage from './Pages/AboutPage'

const Main = () => (
    <main className="container">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={RecipesPage} />
                <Route path="/about" component={AboutPage} />
            </Switch>
        </BrowserRouter>    
    </main>
)

export default Main