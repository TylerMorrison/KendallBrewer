import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

// import Home from './components/home.component';
import AppDesign from './components/AppDesign/appDesign.jsx';
import NavBar from './components/NavBar/navBar.jsx';
// import Facts from './components/facts.component';
// import LogIn from './components/login.component';
// import AddEvent from './components/add-event.component';
// import EditEvent from './components/edit-event.component';

import history from './history.js';

function App() {
  return (
    <Switch history={history}>
      <div className="container-fluid" style={{padding: '0px'}}>
        <NavBar />
        <Route path="/" exact component={AppDesign} />
        {/* <Route path="/board" exact component={Board} />
          <Route path="/facts" exact component={Facts} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/add" exact component={AddEvent} />
          <Route path="/edit/:id" exact component={EditEvent} /> */}
        <Route render={() => <Redirect to="/" />} />
      </div>
    </Switch>
  );
}

export default App;
