import { connect } from 'react-redux';

import { removeTodoItem, toggleChangeStatus } from '../actions';
import TodoItem from '../components/TodoItem';

const mapDispatchToProps = (dispatch) => ({
  removeTodoItem: (todoItemId) => dispatch(removeTodoItem(todoItemId)),
  toggleChangeStatus: (todoItemId) => dispatch(toggleChangeStatus(todoItemId)),
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;
