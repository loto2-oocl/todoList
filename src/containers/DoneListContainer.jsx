import { connect } from 'react-redux';

import DoneList from '../components/DoneList';
import { DONE } from '../constants/TodoItemStatus';

const mapStateToProps = (state) => ({
  doneList: state.todoItemList.filter((todoItem) => todoItem.status === DONE),
});

const DoneListContainer = connect(mapStateToProps)(DoneList);

export default DoneListContainer;
