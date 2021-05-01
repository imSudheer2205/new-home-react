import React from 'react';
// import Navbar from './components/Navbar';
import Navbar from './components/HomePageLogin/Navbar';
import './App.css';
//import './HomePageLogin/App.css';
import Home from './components/HomePageLogin/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Services from './components/HomePageLogin/pages/Services';
import Topics from './components/HomePageLogin/pages/Services';
import Products from './components/HomePageLogin/pages/Products';
import CreatePost from './components/HomePageLogin/pages/CreatePost';
import SignUp from './components/HomePageLogin/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/services' component={Services} /> */}
          <Route path='/services' component={Topics} />
          <Route path='/products' component={Products} />
          <Route path='/createPost' component={CreatePost} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
