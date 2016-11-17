import { SHOW_DATA } from './const';

function showData(d) {
  return {
    type: SHOW_DATA,
    d
  };
}
function action(cityName) {
  const url = `https://bird.ioliu.cn/weather?city=${cityName}`;
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(d => dispatch(showData(d)));
  };
}


module.exports = action;
