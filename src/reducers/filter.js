const initialState = {
    filterValue : ''
}
export const filter = (state = initialState,action) => {
    switch (action.type) {
        case 'FILTER_USERS':
            return {
                ...state,
                filterValue : action.payload
            }
        default:
           return state;
    }
}