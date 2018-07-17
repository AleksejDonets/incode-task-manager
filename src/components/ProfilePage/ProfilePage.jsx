import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUser, editUser } from '../../store';
import UserCard from './UserCard';
import EditCardUser from './EditUserCard';

class ProfilePage extends Component {

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }

  render() {
    const { user } = this.props;
    return (
       <div>
         <UserCard user={user}/>
         <EditCardUser/> 
       </div>
          
    
     
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.profile,
});

const mapDispatchToProps = dispatch => ({
  getUser: () => {
    dispatch(loadUser());
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
