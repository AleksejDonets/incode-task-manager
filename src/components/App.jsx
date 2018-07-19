import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { loadUserFetch } from '../store/actions';
import { loadTasks } from '../store/actions';
import { AppHeader } from './AppHeader';
import { ProfilePage } from './ProfilePage';
import { UserTasksPage } from './UserTasksPage';
import { BoardPage } from './Board';


class App extends Component {
  componentDidMount() {
    const { getUser, getTasks } = this.props;
    getUser();
    getTasks();
   
  }
  render(){
    const { idUser } = this.props; 
    return (
      <div>
        <AppHeader idUser={idUser}/>
        <Switch>
          <Route exact path='/' component={ProfilePage}/>
          <Route path='/board' component={BoardPage} />
          <Route path='/tasks/:id' component={UserTasksPage} />
        </Switch>
       
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(loadUserFetch()),
  getTasks: () => dispatch(loadTasks()),
});

const mapStateToProps = ({ user }) => ({
  idUser: user.profile.id,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
