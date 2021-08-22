import Home from './components/Home';
import Details from './components/Details';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HeroSection} />
          <Route path='/details' component={Details} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
