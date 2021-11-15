import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onRemove, onToggle}) => {

  return (
    <div className="TodoList">
      {todos.length === 0 ? <span className="nothing">일정을 추가해 보세요 !</span> : todos.map(todo => <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />)}
    </div>
  );
};

export default TodoList;