export const initialState = [{
    name: 'Learn about reducers',
    completed: false,
    id: 3892987589
}];

export const todolistReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        default:
            return state;
    }
};