// src/components/TodoList.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../store/store';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => dispatch(toggleTodo(index))}
            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;
