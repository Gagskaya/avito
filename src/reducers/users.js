const initialState = {
    items : null
}
export const users = (state = initialState,action) => {
    switch(action.type) {
        case  'SET_USERS' :
        return {
            ...state,
            items : action.payload
        }
        default : 
        return state;
    }
}