import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import Landing from './pages/landing'
import Register from './pages/register'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  // redux is user logged in
  const isLoggedIn = false
  
  // Need to add proper dashboard and other routes later
  if(isLoggedIn) {
    return (
      <Provider store={store}>
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
      </Provider>
      )
    }

  if (!isLoggedIn) {
    return (
      <Provider store={store}>
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
      </Provider>
    )
  }
}

export default App;
