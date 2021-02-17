import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, SearchResult } from './views'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/searchResults/' component={SearchResult}/>
                    <Route path='/searchResults/:query' component={SearchResult}/>
                </Switch>
            </Router>
        )
    }
}

export default App
