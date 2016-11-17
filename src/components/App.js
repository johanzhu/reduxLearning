import React, { PropTypes } from 'react';
import './app.css';

let backImg = require('../images/timg.jpg');
class AppComponent extends React.Component {
  componentDidMount() {
    this.props.showBeijing();
    const cityObj = this.refs;
    const c1 = () => { this.props.showData('哈尔滨'); };
    const c2 = () => { this.props.showData('北京'); };
    const c3 = () => { this.props.showData('长春'); };
    const c4 = () => { this.props.showData('沈阳'); };
    const c5 = () => { this.props.showData('天津'); };
    const c6 = () => { this.props.showData('呼和浩特'); };
    const c7 = () => { this.props.showData('乌鲁木齐'); };
    const c8 = () => { this.props.showData('银川'); };
    const c9 = () => { this.props.showData('西宁'); };
    const c10 = () => { this.props.showData('兰州'); };
    const c11 = () => { this.props.showData('西安'); };
    const c12 = () => { this.props.showData('拉萨'); };
    const c13 = () => { this.props.showData('成都'); };
    const c14 = () => { this.props.showData('重庆'); };
    const c15 = () => { this.props.showData('贵阳'); };
    const c16 = () => { this.props.showData('昆明'); };
    const c17 = () => { this.props.showData('太原'); };
    const c18 = () => { this.props.showData('石家庄'); };
    const c19 = () => { this.props.showData('济南'); };
    const c20 = () => { this.props.showData('郑州'); };
    const c21 = () => { this.props.showData('合肥'); };
    const c22 = () => { this.props.showData('南京'); };
    const c23 = () => { this.props.showData('上海'); };
    const c24 = () => { this.props.showData('武汉'); };
    const c25 = () => { this.props.showData('长沙'); };
    const c26 = () => { this.props.showData('南昌'); };
    const c27 = () => { this.props.showData('杭州'); };
    const c28 = () => { this.props.showData('福州'); };
    const c29 = () => { this.props.showData('台北'); };
    const c30 = () => { this.props.showData('南宁'); };
    const c31 = () => { this.props.showData('海口'); };
    const c32 = () => { this.props.showData('广州'); };
    const c33 = () => { this.props.showData('香港'); };
    const c34 = () => { this.props.showData('澳门'); };
    cityObj.哈尔滨.addEventListener('click', c1);
    cityObj.北京.addEventListener('click', c2);
    cityObj.长春.addEventListener('click', c3);
    cityObj.沈阳.addEventListener('click', c4);
    cityObj.天津.addEventListener('click', c5);
    cityObj.呼和浩特.addEventListener('click', c6);
    cityObj.乌鲁木齐.addEventListener('click', c7);
    cityObj.银川.addEventListener('click', c8);
    cityObj.西宁.addEventListener('click', c9);
    cityObj.兰州.addEventListener('click', c10);
    cityObj.西安.addEventListener('click', c11);
    cityObj.拉萨.addEventListener('click', c12);
    cityObj.成都.addEventListener('click', c13);
    cityObj.重庆.addEventListener('click', c14);
    cityObj.贵阳.addEventListener('click', c15);
    cityObj.昆明.addEventListener('click', c16);
    cityObj.太原.addEventListener('click', c17);
    cityObj.石家庄.addEventListener('click', c18);
    cityObj.济南.addEventListener('click', c19);
    cityObj.郑州.addEventListener('click', c20);
    cityObj.合肥.addEventListener('click', c21);
    cityObj.南京.addEventListener('click', c22);
    cityObj.上海.addEventListener('click', c23);
    cityObj.武汉.addEventListener('click', c24);
    cityObj.长沙.addEventListener('click', c25);
    cityObj.南昌.addEventListener('click', c26);
    cityObj.杭州.addEventListener('click', c27);
    cityObj.福州.addEventListener('click', c28);
    cityObj.台北.addEventListener('click', c29);
    cityObj.南宁.addEventListener('click', c30);
    cityObj.海口.addEventListener('click', c31);
    cityObj.广州.addEventListener('click', c32);
    cityObj.香港.addEventListener('click', c33);
    cityObj.澳门.addEventListener('click', c34);
  }
  render() {
    const { cityName, showBeijing, weather, tem, hu, wind, cloth, cold, con, car,
    sport, light, showData } = this.props;
    const array = [];
    for (let i = 0; i < 34; i++) {
      let item = this.props.city[i];
      array.push(
        <div
          ref={item} key={i + showBeijing + showData}
          className="cityItem">{item}
        </div>
      );
    }
    return (
      <div className="container">
        <div className="title">
          <div className="titlelogo">Nomi</div><div>weather</div>
          <div className="cityBox">
            <div className="cityList">
              {array}
            </div>
          </div>
        </div>
        <div className="weather">
          <img src={backImg} alt="卡了"/>
          <div id="weatherBox">
            <div>城市: {cityName}</div>
            <div>天气: {weather}</div>
            <div>温度: {tem}°</div>
            <div>湿度: {hu}</div>
            <div>风: {wind}</div>
            <div>穿衣: {cloth}</div>
            <div>感冒: {cold}</div>
            <div>空调: {con}</div>
            <div>洗车: {car}</div>
            <div>运动: {sport}</div>
            <div>紫外线: {light}</div>
          </div>
        </div>
      </div>
    );
  }
}
AppComponent.defaultProps = {
  city: ['北京', '哈尔滨', '长春', '沈阳', '天津', '呼和浩特', '乌鲁木齐',
      '银川', '西宁', '兰州', '西安', '拉萨', '成都', '重庆', '贵阳', '昆明',
      '太原', '石家庄', '济南', '郑州', '合肥', '南京', '上海', '武汉', '长沙',
      '南昌', '杭州', '福州', '台北', '南宁', '海口', '广州', '香港', '澳门'],
  picked: false,
};
AppComponent.propTypes = {
  city: PropTypes.array.isRequired,
  cityName: PropTypes.string.isRequired,
  showBeijing: PropTypes.func.isRequired,
  weather: PropTypes.string.isRequired,
  tem: PropTypes.string.isRequired,
  hu: PropTypes.string.isRequired,
  wind: PropTypes.string.isRequired,
  cloth: PropTypes.string.isRequired,
  cold: PropTypes.string.isRequired,
  con: PropTypes.string.isRequired,
  car: PropTypes.string.isRequired,
  sport: PropTypes.string.isRequired,
  light: PropTypes.string.isRequired,
  picked: PropTypes.bool.isRequired,
  showData: PropTypes.func.isRequired
};

export default AppComponent;
