import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/ui/Menu';

import ConnectView from './views/ConnectView';
import ProfileView from './views/ProfileView';
import HousingView from './views/HousingView';

import 'bootstrap/dist/css/bootstrap.css';

import './styles/fonts.css';
import './styles/buttons.css';
import './styles/footer.css';
import './styles/scroll.css';

class App extends Component
{
  render()
  {
    return (
      <Router>
        <Menu items={[
          {
            title: "Home",
            path: "/"
          },
          {
            title: "Profile",
            path: "/profile"
          },
          {
            title: "Housing",
            path: "/housing"
          }
        ]}/>

        <div className="container-fluid">
          <Switch>
            <Route exact path="/">
              <ConnectView />
            </Route>

            <Route exact path="/profile">
              <ProfileView />
            </Route>

            <Route exact path="/housing">
              <HousingView />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
