import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Pages
import Landing from './pages/landing'
import Register from './pages/register'
import Dashboard from './pages/dashboard'



const App = () => {
  // redux is user logged in
  const { isAuthenticated } = useSelector(state => state.auth)
  
  // Need to add proper dashboard and other routes later
  if (isAuthenticated) {
    return (
      <Router>
        <Switch>
          <Route path='/'>
            <Dashboard/>
          </Route>
        </Switch>
      </Router>
      )
    }

  if (!isAuthenticated) {
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
