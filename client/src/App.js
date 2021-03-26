import { AppLayout } from './App.styles.js';


// components
import Landing from './pages/landing'
import Navbar from './components/layout/navbar'

const App = () => {
  return (
    <AppLayout className="App">
      <Navbar/>
      <Landing/>
    </AppLayout>
  );
}

export default App;
