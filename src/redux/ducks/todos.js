import {createActions, handleActions} from 'redux-actions';
import {createSelector} from 'reselect';
import * as R from 'ramda';

//initial state
const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: []
};
//actions
let nextTodoId = 0;
const {addTodo, toggleTodo, setVisibilityFilter} = createActions({
  ADD_TODO: text => ({text, id: nextTodoId++}),
  TOGGLE_TODO: index => ({index}),
  SET_VISIBILITY_FILTER: filter => ({filter})
});

//Export actions
export {addTodo, toggleTodo, setVisibilityFilter};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

//Reducer

export default handleActions(
  {
    [addTodo](state, {payload: {text, id}}) {
      return R.evolve(
        {
          todos: R.append({text, id, completed: false})
        },
        state
      );
    },
    [toggleTodo](state, {payload: {index}}) {
      return R.evolve(
        {
          todos: R.map(
            R.when(R.propEq('id', index), R.assoc('completed', true))
          )
        },
        state
      );
    },
    [setVisibilityFilter](state, {payload: {filter}}) {
      return R.assoc('visibilityFilter', filter, state);
    }
  },
  initialState
);

//selectors
const getVisibilityFilter = R.prop('visibilityFilter');
const getTodos = R.prop('todos');
const completed = R.filter(R.propEq('completed', true));
const active = R.filter(R.propEq('completed', true));

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return completed(todos);
      case VisibilityFilters.SHOW_ACTIVE:
        return active(todos);
    }
  }
);
