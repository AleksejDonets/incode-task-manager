const initialState = {
    profile: {},
};


export default (state = initialState, action) =>{
    switch(action.type){
        case 'LOAD_USER':
            return Object.assign({}, state, { profile: action.profile });
        case 'EDIT_USER': 
            return Object.assign({}, state, { profile: action.user });
        default:
            return state
    }
    
}
