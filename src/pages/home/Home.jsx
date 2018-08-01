import React from 'react'

import HomeHeader from './components/Header/Header'
import HomeSwiper from './components/Swiper/Swiper'
import HomeIcons from './components/Icons/Icons'
import HomeRecommend from './components/Recommend/Recommend'
import HomeWeekend from './components/Weekend/Weekend'

export default class Home extends React.Component{
  constructor(){
    super()
    this.state={
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],
      loading:true
    }
  }
  getHomeInfo=()=>{
    const url="/api/index.json"
    fetch(url,{
      method:'get'
    })
    .then(response=>response.json())
    .then(this.getHomeInfoSucc)
  }
  getHomeInfoSucc=(result)=>{
    console.log(result)
    if(result.ret&&result.data){
      const data=result.data
      const swiperList=data.swiperList
      const iconList=data.iconList
      const recommendList=data.recommendList
      const weekendList=data.weekendList
      this.setState({
        swiperList,
        iconList,
        recommendList,
        weekendList,
        loading:false
      })

    }
  }
  componentWillMount=()=>{
    this.getHomeInfo()
  }
  render(){
    const {swiperList,iconList,recommendList,weekendList,loading}=this.state
    let content=null
    if(!loading){
      content=<div>
        <HomeHeader/>
        <HomeSwiper swiperList={swiperList}/>
        <HomeIcons iconList={iconList}/>
        <HomeRecommend recommendList={recommendList}/>
        <HomeWeekend weekendList={weekendList}/>
      </div>        
    }
    return (
      <div>
        {content}
      </div>
    )
  }
}