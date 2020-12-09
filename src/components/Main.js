import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import HelloPage from './Hello-page';
import About from './About';
import Frontend from './Frontend';
import Navigation from './Navigation';

function Main({showLoader, hideLoader}) {
  return (
    <main className="main">
      <section className="main__content">
        <Switch>
            <Route exact path="/">
              <HelloPage/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/frontend">
              <Frontend showLoader={showLoader} hideLoader={hideLoader}/>
            </Route>
          </Switch>
      </section>
        <Navigation/>
    </main>
  );
}

export default Main; 