import React from 'react';

function TodoItem({ todo, toggleTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`} onClick={() => toggleTodo(todo.id)}>
      <span>{todo.text}</span>
    </div>
  );
}

export default TodoItem;
