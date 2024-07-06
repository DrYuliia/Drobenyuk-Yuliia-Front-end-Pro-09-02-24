import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_TODOS } from '../actions/types';

const initialState = [];

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return action.payload;
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return state;
    }
};

export default todoReducer;
