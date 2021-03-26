import { AppLayout } from './App.styles.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import Landing from './pages/landing'
import Register from './pages/register'

const App = () => {
  // redux is user logged in
  const isLoggedIn = false
  
  
  if(isLoggedIn) {
    return (
      <Router>
        <Switch>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/'>
            <Landing/>
          </Route>
        </Switch>
      </Router>
      )
    }

  if (!isLoggedIn) {
    return (
      <Router>
        <Switch>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
