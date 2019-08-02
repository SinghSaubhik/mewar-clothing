import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HoemPage from './components/pages/homepage/homepage.component'

function Hats(){
  return (
    <div>
      <h1>Hello Hats</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HoemPage} />
        <Route path='/hats' component={Hats} />
      </Switch>

    </div>
  );
}

export default App;
