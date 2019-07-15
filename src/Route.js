import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import khunghinh from './container/khunghinh';

function Routee() {
    return (
        <Switch>
            <Route exact path="/" component={khunghinh} />
            {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
        </Switch>
    );
}

export default Routee;
