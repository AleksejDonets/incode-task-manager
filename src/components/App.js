import React, { Component } from 'react';
import { connect } from 'react-redux';
import {AppHeader} from './AppHeader';
import { ProfilePage } from './ProfilePage';

class App extends Component {

  
  render() {
    const {user} = this.props;
    return (
      <div>
        <AppHeader  name={user.first_name}/>
        <ProfilePage /> 
      </div>
     
    );
  }
}
const mapStateToProps = state =>({
  user: state.user
});
export default connect(mapStateToProps)(App);
