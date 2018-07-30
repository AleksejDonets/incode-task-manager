const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if(!values.name){
    errors.name = 'Required';
  }
  if(!values.birth){
    errors.birth = 'Required';
  }
  
  if(!values.title) {
    errors.title='Required';
  }
  if(!values.description) {
    errors.description='Required';
  }
  if(!values.taskStatus) {
    errors.taskStatus = 'Required';
  }
  if(!values.taskPerformer){
    errors.taskPerformer = 'Required';
  }
  return errors
};

export default validate;
