import React from 'react'
import { Switch, Route } from 'react-router-dom';

const HomePage = () => (
  <div> HOMEPAGE </div>
)

const About = () => (
  <div> ABOUT </div>
)

const SwitchDemo = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/about" component={About} />
  </Switch>
);

export default SwitchDemo;