import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SignIn from './SignIn';
import MyPage from './MyPage';
import { Button } from '@material-ui/core';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const MenuBar = () => {
  return (
    <div>
      <Router>
        <AppBar>
          <Toolbar color="primary">
            <div>CafeTopia</div>
            <Button size="large" color="second">
            <Link to="/Login" style={{textDecoration: 'none', color: 'black'}}>Login</Link>
            </Button>
            <Button size="large" color="second">
            <Link to="/MyPage" style={{textDecoration: 'none', color: 'black'}}>MyPage</Link>
            </Button>
          </Toolbar>
        </AppBar>
        
        <Route exact path="/Login" component={SignIn}/>
        <Route path="/MyPage" component={MyPage}/>
      </Router>
    </div>
  );
};

export default MenuBar;