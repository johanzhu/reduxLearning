/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import showData from '../actions/showData.js';
import showBeijing from '../actions/showBeijing.js';
const actions = {
  showBeijing,
  showData
};
module.exports = actions;
