import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { verifyUser, logOutUser, loadAllUsers } from '../store/actions';
import { AppHeader } from '../components/AppHeader';
import { ProfilePage } from './ProfilePage';
import { UserTasksPage } from './UserTasksPage';
import { BoardPage } from './BoardPage';
import { TaskPage } from './TaskPage';
import { LoginPage } from './ LoginPage';
import { SignPage } from './SignPage';
import { CreateTaskPage } from './CreateTaskPage';
import { EditTaskPage } from './EditTaskPage';
class App extends Component {
  static propTypes = {
    getUser: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.logOutUser = this.logOutUser.bind(this);
  }

  componentDidMount() {
    const { getUser, getAllUsers } = this.props;
    getUser();
    getAllUsers();
  }
  logOutUser () {
    const { logOut }=this.props;
    logOut();
  }

  checkRouteWay(isLogged, idUser, isAdmin) {

    if (isLogged) {
      return (
        <div>
          <AppHeader idUser={idUser} status={isLogged} logOut={this.logOutUser} admin={isAdmin} />
          <Switch>
            <Route exact path="/" component={BoardPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/user-tasks/:id" component={UserTasksPage} />
            <Route path="/task/create" component={CreateTaskPage} />
            <Route path="/tasks/task/:id" component={TaskPage} />
            <Route path="/task/edit" component={EditTaskPage} />
            <Route path="/logout" />
            {!isLogged && <Redirect to='/login' />}
          </Switch>
         
        </div>
      ) 
    }else {
      return(
        <div>
          <AppHeader idUser={idUser} status={isLogged} />
          
          <Switch> 
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignPage} />
            <Route path="/task/creacte" />
            
          </Switch> 
        </div>
       
      )
      
    }
    
  }
  
  render() {
    const { idUser, isLogged, isAdmin } = this.props;
    return (
      <div>
        {
          this.checkRouteWay(isLogged, idUser, isAdmin)
        }
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(verifyUser()),
  getAllUsers: () => dispatch(loadAllUsers()),
  logOut: () => dispatch(logOutUser()),
});

const mapStateToProps = ({ user }) => ({
  idUser: user.profile._id,
  isLogged: user.isLogged,
  isAdmin: user.isAdmin,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
