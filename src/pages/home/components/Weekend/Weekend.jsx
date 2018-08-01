import React from 'react'
import PropTypes from 'prop-types'
import './style-weekend.styl'

export default class Weekend extends React.Component{
  static propTypes={
    weekendList:PropTypes.array.isRequired
  }
  render(){
    const weekendList=this.props.weekendList
    return(
      <div className="Home-weekend">
        <div className="title">周末去哪儿</div>
        <ul>
          {weekendList&&weekendList.map(item=>(
            <li className="item border-bottom" key={item.id}>
              <div className="item-img-wrapper">
                <img className="item-img" src={item.imgUrl} alt=""/>
              </div>
              <div className="item-info">
                <p className="item-title">{item.title}</p>
                <p className="item-desc">{item.desc}</p>
              </div>
            </li>
          ))} 
        </ul>
      </div>
    )
  }
}