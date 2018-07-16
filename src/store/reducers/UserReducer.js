const initialState = {
    profile: {},
};


export default (state = initialState, action) =>{
    if(action.type === 'LOAD_USER') {
        return Object.assign({}, state, { profile: action.profile })
    }else{
        return state
    }
}
