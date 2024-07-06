import axios from 'axios';
import { SET_TODOS, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './types';

// Правильний URL вашого API
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => async (dispatch) => {
    try {
        const response = await axios.get(API_URL);
        dispatch({ type: SET_TODOS, payload: response.data });
    } catch (error) {
        console.error('Error fetching todos', error.response ? error.response.data : error.message);
    }
};

export const addTodo = (todo) => async (dispatch) => {
    try {
        const response = await axios.post(API_URL, todo);
        dispatch({ type: ADD_TODO, payload: response.data });
    } catch (error) {
        console.error('Error adding todo', error.response ? error.response.data : error.message);
    }
};

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        dispatch({ type: DELETE_TODO, payload: id });
    } catch (error) {
        console.error('Error deleting todo', error.response ? error.response.data : error.message);
    }
};

export const toggleTodo = (id, completed) => async (dispatch) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, { completed });
        dispatch({ type: TOGGLE_TODO, payload: response.data });
    } catch (error) {
        console.error('Error toggling todo', error.response ? error.response.data : error.message);
    }
};
