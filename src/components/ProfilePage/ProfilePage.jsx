import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../store/actions';
import UserCard from './UserCard';

class ProfilePage extends Component {
    componentDidMount = () => {
        const {getUser} = this.props;
        getUser();
    }

    render(){
        const {user} = this.props;
        
        return(
           <UserCard user={user}/>
        )
    }
}

const mapStateToProps = state =>({
    user: state.user
});

const mapDispatchToProps = dispatch =>({
    getUser: () => {
        dispatch(loadUser());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);