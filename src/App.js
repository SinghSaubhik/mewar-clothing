import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HoemPage from './components/pages/homepage/homepage.component'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HoemPage} />>
      </Switch>
      
    </div>
  );
}

export default App;
