import React from 'react';
import {
     Switch, 
     Route, 
     BrowserRouter as Router,
} from 'react-router-dom';

import Repositories from '../Repositories/Repositories';
import Home from '../Home/Home';

export default function Routes(){
    return(
        <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/Repositories' component={Repositories} />
                </Switch>
        </Router>
    )}