import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { loadUserFetch } from '../store/actions';
import { AppHeader } from '../components/AppHeader';
import { ProfilePage } from './ProfilePage';
import { UserTasksPage } from './UserTasksPage';
import { BoardPage } from './BoardPage';
import { TaskPage } from './TaskPage';
import { LoginPage } from './ LoginPage';

class App extends Component {
  static propTypes = {
    getUser: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { getUser } = this.props;

  }

  render() {
    const { idUser } = this.props;
    return (
      <div>
        <AppHeader idUser={idUser} />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/user-tasks/:id" component={UserTasksPage} />
          <Route exact path="/" component={BoardPage} />
          <Route path="/tasks/task/:id" component={TaskPage} />
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
