import axios from 'axios';

export const loadUser = () => dispatch =>{
    axios('./users.json')
       
        .then (data => dispatch({    
            type: 'LOAD_USER',
            profile: data.data.user
        }))
};

