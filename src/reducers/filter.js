const initialState = {
    filterValue : ''
}
export const filter = (state = initialState,action) => {
    switch (action.type) {
        case 'FILTER_ITEMS':
            return {
                ...state,
                filterValue : action.payload
            }
        default:
           return state;
    }
}