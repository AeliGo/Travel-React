import React from 'react'

import HomeHeader from './components/Header/Header'
import HomeSwiper from './components/Swiper/Swiper'

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
      }]
    }
  }
  render(){
    const {swiperData}=this.state
    return (
      <div>
        <HomeHeader/>
        <HomeSwiper swiperData={swiperData}/>
        <h1>1111111</h1>
      </div>
    )
  }
}