import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { loadUserFetch } from '../store/actions';
import { loadTasks } from '../store/actions';
import { AppHeader } from './AppHeader';
import { ProfilePage } from './ProfilePage';
import { UserTasksPage } from './UserTasksPage';


class App extends Component {
  componentDidMount() {
    const { getUser, getTasks } = this.props;
    getUser();
    getTasks();
   
  }
  render(){
    return (
      <div>
        <AppHeader />
        <Route exact path='/' component={ProfilePage}/>
        <Route path='/tasks/:id' component={UserTasksPage} />
       
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(loadUserFetch()),
  getTasks: () => dispatch(loadTasks()),
});

export default withRouter(connect(null, mapDispatchToProps)(App));
