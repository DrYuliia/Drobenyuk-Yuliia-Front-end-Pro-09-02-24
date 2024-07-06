import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions/todoActions';

const Todo = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <li>
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none'
                }}
                onClick={() => dispatch(toggleTodo(todo.id))}
            >
                {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
    );
};

export default Todo;
