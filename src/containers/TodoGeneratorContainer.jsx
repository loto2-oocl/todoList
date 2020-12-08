import { connect } from 'react-redux';

import { addTodoItem } from '../actions';
import TodoGenerator from '../components/TodoGenerator';

const mapDispatchToProps = (dispatch) => ({
  addTodoItem: (message) => dispatch(addTodoItem(message)),
});

const TodoGeneratorContainer = connect(null, mapDispatchToProps)(TodoGenerator);

export default TodoGeneratorContainer;
