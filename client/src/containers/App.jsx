import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { verifyUser } from '../store/actions';
import { AppHeader } from '../components/AppHeader';
import { ProfilePage } from './ProfilePage';
import { UserTasksPage } from './UserTasksPage';
import { BoardPage } from './BoardPage';
import { TaskPage } from './TaskPage';
import { LoginPage } from './ LoginPage';
import { SignPage } from './SignPage';
class App extends Component {
  static propTypes = {
    getUser: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);

    this.checkRouteWay = this.checkRouteWay.bind(this);
  }

  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }

  checkRouteWay(isLogged, idUser) {
    if (isLogged) {
      return (
        <div>
          <AppHeader idUser={idUser} status={isLogged} />
          <Switch>
            <Route path="/logout"/>
            <Route path="/profile" component={ProfilePage} />
            <Route path="/user-tasks/:id" component={UserTasksPage} />
            <Route exact path="/" component={BoardPage} />
            <Route path="/tasks/task/:id" component={TaskPage} />
            <Redirect to="/profile" />
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
            <Redirect to="/login" />
          </Switch> 
        </div>
       
      )
      
    }
    
  }
  
  render() {
    const { idUser, isLogged } = this.props;
    console.log(isLogged)
    return (
      <div>
        {
          this.checkRouteWay(isLogged, idUser)
        }
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(verifyUser()),

});

const mapStateToProps = ({ user }) => ({
  idUser: user.profile._id,
  isLogged: user.isLogged,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
