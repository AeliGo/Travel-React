import React from 'react'
import PropTypes from 'prop-types'
import './style-iconsPage.styl'

export default class IconsPage extends React.Component{
  static propType={
    icons:PropTypes.array.isRequired
  }
  render(){
    const icons=this.props.icons
    return <div>
      {icons.map(item=>(
        <div className="page-icon" key={item.id}>
          <div className="icon-img-wrap">
            <img className="icon-img-content" src={item.imgUrl} alt=""/>
          </div>
          <p className="icon-desc">{item.desc}</p>
        </div>
      ))}
    </div>
    
  }
}