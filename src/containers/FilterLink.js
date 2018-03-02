import {connect} from 'react-redux';
import {setVisibilityFilter} from '../redux/ducks/todos';
import Link from '../components/Link';
import * as R from 'ramda';

const mapStateToProps = (state, ownProps) => {
  return {
    active: R.equals(ownProps.filter, state.todosState.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
