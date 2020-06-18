const initialState = {
    repos : null
}
export const items = (state = initialState,action) => {
    switch(action.type) {
        case  'SET_ITEMS' :
        return {
            ...state,
            repos : action.payload
        }
        default : 
        return state;
    }
}