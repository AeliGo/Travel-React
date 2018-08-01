import React from 'react'
import './style-swiper.styl'
import ReactSwipe from 'react-swipe'
import PropTypes from 'prop-types'

export default class Swiper extends React.Component{
  constructor(props){
    super(props)
    this.state={
      currentIndex:0
    }
  }
  static propTypes={
    swiperData : PropTypes.array.isRequired
  }
  render(){
    const swiperData=this.props.swiperData
    const _self=this
    return (
      <div className="Home-swiper_wrapper">
        <ReactSwipe className="carousel img-wrapper" 
        swipeOptions={{continuous: true,
                      startSlide: 0,
                      speed: 400,
                      callback: function(currentIndex) {_self.setState({currentIndex})},
                      auto: 3000,}}>
          {swiperData.map(item=>(
            <img key={item.id} src={item.imgUrl} style={{width:'100%'}} alt="图片" />
          ))}
        </ReactSwipe>
        <div className="pagenation">
            {swiperData.map((item,index)=>{ return <span key={index.toString()} className={index===this.state.currentIndex?'dot dot-active':'dot'}></span>})}
        </div>
      </div>
    )
  }
}
