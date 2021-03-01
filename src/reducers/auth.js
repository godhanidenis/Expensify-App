var authReducer =  (state = {}, action) => {
    
    switch(action.type){
        case 'LOGIN':
            console.log("Reducer");
            console.log(action);
            return {
                uid: action.uid
            }
        case 'LOGOUT':
            console.log(action);
            return { };
        default:
            console.log(action);
            return state;
    }
};

export default authReducer;