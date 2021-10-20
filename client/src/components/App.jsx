import React from 'react';
import Navbar from './navbar/Navbar';
import Products from './products/Products';
import LogIn from './auth/login/LogIn';
import SignUp from './auth/signup/SignUp';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import { useDispatch } from 'react-redux';
import { auth } from "../redux/actions/users"
import './App.less'

function App() {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path={'/'}>
              <HomePage />
            </Route>
            <Route path={'/signup'}>
              <SignUp />
            </Route>
            <Route>
              <LogIn path={'/login'}/>
            </Route>
            <Route>
              <Products path={'/products'}/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;