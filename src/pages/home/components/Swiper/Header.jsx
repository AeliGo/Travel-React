import React from 'C:/Users/kun12/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react'
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
        <div className="header-left">
          <span className="iconfont backward-arrow">&#xe607;</span>
        </div>
        <div className="header-input">
          <input className="iconfont" type="search" placeholder={this.state.icon} name="keywords"/>
        </div>
        <div className="header-right">
        北京
        <span className="iconfont dropdown-arrow">&#xe64a;</span>
        </div>
      </div>
    )
  }
}