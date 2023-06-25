import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

// import Home from './components/home.component';
import Home from './components/Home/home';
import NavBar from './components/NavBar/navBar';
// import Facts from './components/facts.component';
// import LogIn from './components/login.component';
// import AddEvent from './components/add-event.component';
// import EditEvent from './components/edit-event.component';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/KendallBrewer" exact component={Home} />
        <Route render={() => <Redirect to="/KendallBrewer" />} />
      </Switch>
    </div>
  );
}

export default App;
