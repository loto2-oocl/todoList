import { connect } from 'react-redux';

import { removeTodoItem } from '../actions';
import TodoItem from '../components/TodoItem';

const mapDispatchToProps = (dispatch) => ({
  removeTodoItem: (todoItemId) => dispatch(removeTodoItem(todoItemId)),
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;
