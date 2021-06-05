import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom'

import Navbar from "./components/Navbar";
import HomePage from './components/pages/Home'

function App() {
  return (
    <>
    <Router className="App">
      <Navbar />
      <Switch>
        <Route path='/home' component={HomePage} />
      </Switch>
    </Router>
    </>
  );
}



export default App;
