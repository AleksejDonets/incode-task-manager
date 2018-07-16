import React, { Component } from 'react';
import {AppHeader} from './AppHeader';
import { ProfilePage } from './ProfilePage';

class App extends Component {

  
  render() {
    return (
      <div>
        <AppHeader  />
        <ProfilePage /> 
      </div>
     
    );
  }
}

export default App;
