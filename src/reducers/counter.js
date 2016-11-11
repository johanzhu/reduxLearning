/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {INCREMENT, DECREMENT} from '../actions/const';

const initialState = {
  number: 0
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    case INCREMENT: {
      return state.number + 1;
    }
    case DECREMENT: {
      return state.number - 1;
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
