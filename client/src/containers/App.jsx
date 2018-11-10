import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch, withRouter, Route
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
import { Loader } from '../components/Loader';

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
    const { getUser, getAllUsers } = this.props;
    getUser();
    getAllUsers();
  }

  logOutUser() {
    const { logOut } = this.props;
    logOut();
  }

  appRoute() {
    const { idUser, isLogged, isAdmin, isLoad } = this.props;
    return (
      <Router>
        <Fragment>
          <AppHeader idUser={idUser} status={isLogged} logOut={this.logOutUser} admin={isAdmin} />
          <Switch>
            <PrivateRoute exact path="/" component={BoardPage} status={isLogged} load={isLoad} />
            <PrivateRoute path="/profile" component={ProfilePage} status={isLogged} load={isLoad} />
            <PrivateRoute path="/user-tasks/:id" component={UserTasksPage} status={isLogged} load={isLoad} />
            <PrivateRoute path="/task/create" component={CreateTaskPage} status={isLogged} load={isLoad} />
            <PrivateRoute path="/tasks/task/:id" component={TaskPage} status={isLogged} load={isLoad} />
            <PrivateRoute path="/task/edit" component={EditTaskPage} status={isLogged} load={isLoad} />
            <Route path="/login" component={LoginPage} status={isLogged} load={isLoad} />
            <PrivateRoute path="/signup" component={SignPage} status={isLogged} load={isLoad} />
            <PrivateRoute path="/logout" component={LoginPage} status={isLogged} load={isLoad} />
          </Switch>
        </Fragment>
      </Router>
    );
  }

  render() {
    const { isLoad } = this.props;
    if (!isLoad) {
      return (<Loader />);
    }
    return (
      this.appRoute()
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
  isLoad: user.load,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
