/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import decrement from '../actions/decrement.js';
import increment from '../actions/increment.js';
const actions = {
  increment,
  decrement
};
module.exports = actions;
