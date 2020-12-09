import { connect } from 'react-redux';

import { updateTodoItem } from '../actions';
import TagsGenerator from '../components/TagsGenerator';

const mapDispatchToProps = (dispatch) => ({
  updateTodoItem: (todoItem) => dispatch(updateTodoItem(todoItem)),
});

const TagsGeneratorContainer = connect(null, mapDispatchToProps)(TagsGenerator);

export default TagsGeneratorContainer;
