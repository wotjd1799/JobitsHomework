import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainRouter from './router/MainRouter';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={ MainRouter }/>
        </Switch>
      </Router>
    </>
  );
}

export default App;