import React from 'react'
import './style-recommend.styl'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default class Recommend extends React.Component{
  constructor(){
    super()
    this.state={
      listShow:[],
      listHide:[],
      loadmore:false
    }
  }
  static propTypes={
    recommendList:PropTypes.array.isRequired
  }
  componentWillMount=()=>{
    const recommendList=this.props.recommendList
    let listShow=recommendList.filter((item,index)=>{return index < 3})
    let listHide=recommendList.filter((item,index)=>{return index >= 3})
    this.setState({listShow,listHide})
  }
  handleClick=()=>{
    let loadmore=this.state.loadmore
    loadmore=!loadmore
    this.setState({loadmore})
  }
  render(){
    const {listShow,listHide,loadmore}=this.state
    return <div className="Home-recommend-wrapper">
      <div className="title">热销推荐</div>
      <ul>
        <div> 
          {listShow && listShow.map(item=>
            <Link to={"/detail/"+item.id} key={item.id} className="item border-bottom">
              <img className="item-img" src={item.imgUrl} alt=""/>
              <div className="item-info">
                <p className="item-title">{item.title}</p>
                <p className="item-desc">{item.desc}</p>
                <button className="item-button">查看详情</button>
              </div>
            </Link>
          )}
        </div>
        <div className={loadmore?'show':'hide'}> 
          {listShow && listHide.map(item=>(
            <Link to={"/detail/"+item.id} key={item.id} className="item border-bottom">
              <img className="item-img" src={item.imgUrl} alt=""/>
              <div className="item-info">
                <p className="item-title">{item.title}</p>
                <p className="item-desc">{item.desc}</p>
                <button className="item-button">查看详情</button>
              </div>
            </Link>
          ))}
        </div>
      </ul>
      <div className="loadall" onClick={this.handleClick}>{this.state.loadmore?'隐藏部分产品' : '显示所有产品'}</div>
    </div>
  }
}
