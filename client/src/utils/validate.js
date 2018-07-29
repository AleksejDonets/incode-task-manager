const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if(!values.first_name){
    errors.first_name = 'Required';
  }
  if(!values.date_birth){
    errors.date_birth = 'Required';
  }
  if(!values.list_of_skils){
    errors.list_of_skils ='Required';
  }
  return errors
};

export default validate;
