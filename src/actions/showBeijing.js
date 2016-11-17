import { SHOW_BEIJING } from './const';

function showBeijing(json) {
  return {
    type: SHOW_BEIJING,
    json
  };
}
function action() {
  return dispatch => {
    fetch('https://bird.ioliu.cn/weather?city=北京')
      .then(res => res.json())
      .then(json => dispatch(showBeijing(json)));
  };
}


module.exports = action;
