import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch, Route, withRouter, Redirect,
} from 'react-router-dom';
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
import { PrivateRoute } from '../components/PrivateRoute';

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

  componentDidUpdate() {
    const { getUser } = this.props;
    getUser();
  }

  logOutUser() {
    const { logOut } = this.props;
    logOut();
  }

  render() {
    const { idUser, isLogged, isAdmin } = this.props;
    return (
      <Fragment>
        <AppHeader idUser={idUser} status={isLogged} logOut={this.logOutUser} admin={isAdmin} />
        <Router>
          <Switch>
            <PrivateRoute exact path="/" status={isLogged} component={BoardPage} />
            <PrivateRoute exact path="/profile" status={isLogged} component={ProfilePage} />
            <PrivateRoute exact path="/user-tasks/:id" status={isLogged} component={UserTasksPage} />
            <PrivateRoute exact path="/task/create" status={isLogged} component={CreateTaskPage} />
            <PrivateRoute exact path="/tasks/task/:id" status={isLogged} component={TaskPage} />
            <PrivateRoute exact path="/task/edit" status={isLogged} component={EditTaskPage} />
            <PrivateRoute exact path="/login" status={isLogged} component={LoginPage} />
            <PrivateRoute exact path="/signup" status={isLogged} component={SignPage} />
            <Route exact path="/logout" status={isLogged} component={LoginPage} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

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
