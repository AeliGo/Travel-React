import React from 'react'

import HomeHeader from './components/Header/Header'
import HomeSwiper from './components/Swiper/Swiper'
import HomeIcons from './components/Icons/Icons'
import HomeRecommend from './components/Recommend/Recommend'

export default class Home extends React.Component{
  constructor(){
    super()
    this.state={
      swiperData:[{
        "id": "0001",
        "imgUrl": "https://img1.qunarzz.com/travel/poi/1807/28/05e1021cd9bdc537.jpg_r_640x290x70_7fc23a19.jpg"
      },{
        "id": "0002",
        "imgUrl": "https://img1.qunarzz.com/travel/poi/1807/13/79ad0bfc1d279037.jpg_r_640x290x70_a723d318.jpg"
      },{
        "id": "0003",
        "imgUrl": "https://img1.qunarzz.com/travel/poi/1807/ea/4a20a9ec89b6c537.jpg_r_640x290x70_39c9f7ef.jpg"
      }],
      iconList:[{
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        "desc": "景点门票"
      }, {
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
        "desc": "滑雪季"
      }, {
        "id": "0003",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
        "desc": "泡温泉"
      }, {
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
        "desc": "动植园"
      }, {
        "id": "0005",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
        "desc": "游乐园"
      }, {
        "id": "0006",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
        "desc": "必游榜单"
      }, {
        "id": "0007",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
        "desc": "演出"
      }, {
        "id": "0008",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
        "desc": "城市观光"
      }, {
        "id": "0009",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
        "desc": "一日游"
      }],
      recommendList:[{
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
        "title": "故宫",
        "desc": "东方宫殿建筑代表，世界宫殿建筑典范"
      }, {
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",
        "title": "南山滑雪场",
        "desc": "北京专业级滑雪圣地"
      }, {
        "id": "0003",
        "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg",
        "title": "天安门广场",
        "desc": "我爱北京天安门，天安门上太阳升"
      }, {
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg",
        "title": "水立方",
        "desc": "中国的荣耀，阳光下的晶莹水滴"
      }, {
        "id": "0005",
        "imgUrl": "http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg",
        "title": "温都水城养生馆",
        "desc": "各种亚热带植物掩映其间仿佛置身热带雨林"
      }]
    }
  }
  render(){
    const {swiperData,iconList,recommendList}=this.state
    return (
      <div>
        <HomeHeader/>
        <HomeSwiper swiperData={swiperData}/>
        <HomeIcons iconList={iconList}/>
        <HomeRecommend recommendList={recommendList}/>
      </div>
    )
  }
}