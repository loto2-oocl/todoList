import './TodoGroup.css';
import React, { useEffect } from 'react';
import TodoItemContainer from '../containers/TodoItemContainer';
import { getTodoList } from '../apis/todos';
import { List } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { initTags, initTodos } from '../actions';
import { getAllTags } from '../apis/tags';

const TodoGroup = () => {
  const todoItemList = useSelector((state) => state.todoItemList);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodoList().then((response) => {
      dispatch(initTodos(response.data));
    });

    getAllTags().then((response) => {
      dispatch(initTags(response.data));
    });
  }, [dispatch]);

  return (
    <div className="todogroup-wrapper">
      <List
        size="small"
        dataSource={todoItemList}
        renderItem={(todoItem) => (
          <List.Item key={todoItem.id}>
            <TodoItemContainer todoItem={todoItem} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoGroup;
