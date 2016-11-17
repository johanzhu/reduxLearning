/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { SHOW_BEIJING, SHOW_DATA } from '../actions/const';

const initialState = {
  cityName: '',
  weather: '',
  tem: '',
  hu: '',
  wind: '',
  cloth: '',
  cold: '',
  con: '',
  car: '',
  sport: '',
  light: ''
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    case SHOW_BEIJING: {
      return {
        cityName: action.json.data.realtime.city_name,
        weather: action.json.data.realtime.weather.info,
        tem: action.json.data.realtime.weather.temperature,
        hu: action.json.data.realtime.weather.humidity,
        wind: action.json.data.realtime.wind.direct + action.json.data.realtime.wind.power,
        cloth: action.json.data.life.info.chuanyi[1],
        cold: action.json.data.life.info.ganmao[1],
        con: action.json.data.life.info.kongtiao[1],
        car: action.json.data.life.info.xiche[1],
        sport: action.json.data.life.info.yundong[1],
        light: action.json.data.life.info.ziwaixian[1]
      };
    }
    case SHOW_DATA: {
      return {
        cityName: action.d.data.realtime.city_name,
        weather: action.d.data.realtime.weather.info,
        tem: action.d.data.realtime.weather.temperature,
        hu: action.d.data.realtime.weather.humidity,
        wind: action.d.data.realtime.wind.direct + action.d.data.realtime.wind.power,
        cloth: action.d.data.life.info.chuanyi[1],
        cold: action.d.data.life.info.ganmao[1],
        con: action.d.data.life.info.kongtiao[1],
        car: action.d.data.life.info.xiche[1],
        sport: action.d.data.life.info.yundong[1],
        light: action.d.data.life.info.ziwaixian[1]
      };
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
