import React from 'react'
import sheader from './style-header.styl'

export default class Header extends React.Component{
  constructor(){
    super()
    this.state={
      icon:'\ue611 输入城市/景点/游玩主题'
    }
  }
  render(){
    // console.log(headerStyl)
    return (
      <div className={sheader.header}>
       
      </div>
    )
  }
}