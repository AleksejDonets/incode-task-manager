import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadActiveTask } from '../../store/actions';


class UserTasksPage extends Component {
  componentDidMount(){
    const {  loadActiveTasks, match } = this.props;
    console.log(this.props)
    loadActiveTasks(match.params.id);


    
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
  id: user.profile,

});

const mapDispatchToProps = dispatch =>({
  loadActiveTasks: id => dispatch(loadActiveTask(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(UserTasksPage);
