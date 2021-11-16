import React, { useCallback } from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';
import {List} from 'react-virtualized';

const TodoList = ({todos, onRemove, onToggle}) => {

  const rowRenderer = useCallback(({index, key, style}) => {
    const todo = todos[index];

    return (
      <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style}/>
    )
  }, [todos, onRemove, onToggle]);

  return (
    <div className="TodoList">
      {todos.length === 0 ? <span className="nothing">일정을 추가해 보세요 !</span> : <List className="TodoList"
                                                                                          width={512}
                                                                                          height={513} 
                                                                                          rowCount={todos.length} 
                                                                                          rowHeight={67.58} 
                                                                                          rowRenderer={rowRenderer} 
                                                                                          list={todos} 
                                                                                          style={{outline: 'none'}} />}
    </div>
  );
};

export default React.memo(TodoList);