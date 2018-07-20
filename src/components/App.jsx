import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { loadUserFetch } from '../store/actions';
import { AppHeader } from './AppHeader';
import { ProfilePage } from './ProfilePage';
import { UserTasksPage } from './UserTasksPage';
import { BoardPage } from './Board';


class App extends Component {

  static propTypes = {
    getUser: PropTypes.func.isRequired,
  }
  componentDidMount() {
    const { getUser } = this.props;
    getUser();
   
  }
  render(){
    const { idUser } = this.props; 
    return (
      <div>
        <AppHeader idUser={idUser}/>
        <Switch>
          <Route exact path='/profile' component={ProfilePage}/>
          <Route exact path='/' component={BoardPage} />
          <Route path='/tasks/:id' component={UserTasksPage} />
        </Switch>
       
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(loadUserFetch()),

});

const mapStateToProps = ({ user }) => ({
  idUser: user.profile.id,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
