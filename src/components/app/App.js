import React, { Component } from 'react';
import Header from './Header'
import About from './About'
import Contact from './Contact'
import Home from '../home/Home'
import LocationPage from '../locationpage/LocationPage'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class App extends Component {

    render() {
        return (
            <Router>
                <div className="app">
                <Header />
                <Route path="/Location/:id" component={LocationPage} />
                <Route exact path="/" component={Home}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Contact" component={Contact}/>
                </div>
            </Router>
        )
    }

}