import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUserFetch, editUserSucces } from '../../store/actions';
import UserCard from './UserCard';
import EditCardUser from './EditUserCard';

class ProfilePage extends Component {
  constructor(props){
    super(props);

    this.state = {
      edit: false
    }
    
    this.saveUser = this.saveUser.bind(this);
    this.toggleEditStatus = this.toggleEditStatus.bind(this);
  }
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  }
  toggleEditStatus(){
    this.setState({
      edit: !this.state.edit
    })
  }
  componentDidMount() {
    const { getUser } = this.props;
    console.log(loadUserFetch);
    getUser();
  }

  saveUser(user){   
    this.props.saveEditUser(user);
  }
  render() {
    const { user } = this.props;
    return (
       <div>
         
         <EditCardUser initialValues={user} onSubmitHandler={(values) => {this.saveUser(values)}} /> 
       </div>
    );
  }
}



const mapStateToProps = ({ user }) => ({
  user: user.profile,
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(loadUserFetch()),
  saveEditUser: user => dispatch(editUserSucces(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
