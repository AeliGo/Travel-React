import React from 'react'
import './style-swiper.styl'
import ReactSwipe from 'react-swipe'
import PropTypes from 'prop-types'

export default class Swiper extends React.Component{
  static propTypes={
    swiperData : PropTypes.array.isRequired
  }
  render(){
    return (
      <div className="Home-swiper_wrapper">
        <ReactSwipe className="carousel img-wrapper" 
        swipeOptions={{continuous: true,
                      startSlide: 0,
                      speed: 400,
                      auto: 3000,}}>
          {this.props.swiperData.map(item=>(
            <img key={item.id} src={item.imgUrl} style={{width:'100%'}} alt="图片" />
          ))}
        </ReactSwipe>
      </div>
    )
  }
}
