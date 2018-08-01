import React from 'react'
import './style-swiper.styl'
import ReactSwipe from 'react-swipe'
import PropTypes from 'prop-types'

export default class Swiper extends React.Component{
  constructor(){
    super()
    this.state={
      currentIndex:0
    }
  }
  static propTypes={
    swiperList : PropTypes.array.isRequired
  }
  render(){
    const swiperList=this.props.swiperList
    const _self=this
    return (
      <div className="Home-swiper_wrapper">
        <ReactSwipe className="carousel img-wrapper" 
        swipeOptions={{continuous: true,
                      startSlide: 0,
                      speed: 400,
                      callback: function(currentIndex) {_self.setState({currentIndex})},
                      auto: 3000,}}>
          {swiperList.length && swiperList.map(item=>(
            <img key={item.id} src={item.imgUrl} style={{width:'100%'}} alt="图片" />
          ))}
        </ReactSwipe>
        <div className="pagenation">
            {swiperList.length && swiperList.map((item,index)=>{ return <span key={index.toString()} className={index===this.state.currentIndex?'dot dot-active':'dot'}></span>})}
        </div>
      </div>
    )  
  }
}
