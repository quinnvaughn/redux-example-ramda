import {connect} from 'react-redux';
import {toggleTodo, getVisibleTodos} from '../redux/ducks/todos';
import TodoList from '../components/TodoList';

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todosState)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
