import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadActiveTask } from '../../store/actions';


class UserTasksPage extends Component {
  componentDidMount(){
    const {  loadActiveTasks, id } = this.props;
    
    loadActiveTasks(id);


    
  }
  render() {
    
    
    return (
      <div>
         
          <Link to='/'>
          aaaaa
          </Link>
      </div>
    ) 
  };
};

const mapStateToProps = ({user}) => ({
  id: user.profile.id,
});

const mapDispatchToProps = dispatch =>({
  loadActiveTasks: (id) => dispatch(loadActiveTask(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(UserTasksPage);
