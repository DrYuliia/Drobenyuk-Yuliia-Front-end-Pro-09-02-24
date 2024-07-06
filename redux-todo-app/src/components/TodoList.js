import React from 'react';

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => (
    <ul>
        {todos.map(todo => (
            <li key={todo.id}>
                <span
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    onClick={() => onToggleTodo(todo.id)}
                >
                    {todo.title}
                </span>
                <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
            </li>
        ))}
    </ul>
);

export default TodoList;
