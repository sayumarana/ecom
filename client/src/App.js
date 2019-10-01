import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Index from './pages/Index';
import Products from './pages/Products';
import Contacts from './pages/Contacts';

class App extends React.Component {
  render () {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contacts" component={Contacts} />
          </Switch>
        </Router>
    );
  }
}
export default App;