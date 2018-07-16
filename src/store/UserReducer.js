const initialState = {
    user: {},
};


const UserReducer = function (state = initialState, action){
    if(action.type === 'LOAD_USER') {
        return Object.assign({}, state, { user: action.user })
    }else{
        return state
    }
}

export default UserReducer;