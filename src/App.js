import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import {ROUTES} from 'constants/Routes.js';

const App = () => (
    <div>
        <Router>
            <Header/>
            <Switch>
                <Route path={ROUTES.HOME}>
                    <Home/>
                </Route>
                <Route path={ROUTES.PROJECTS}>
                  <Projects/>
                </Route>
                <Route path={ROUTES.CONTACT}>
                  <Contact/>
                </Route>
                <Route path={ROUTES.ABOUT}>
                  <Contact/>
                </Route>
            </Switch>
        </Router>

    </div>
);

export default App;