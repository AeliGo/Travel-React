import React from 'react'
import IconsPage from './IconsPage'
import ReactSwipe from 'react-swipe'
import PropTypes from 'prop-types'


export default class Icons extends React.Component{
  constructor(props){
    super(props)
    this.state={
      pages:[]
    }
  }
  static propTypes={
    iconList:PropTypes.array.isRequired
  }
  componentWillMount=()=>{
    const iconList=this.props.iconList
    const pages=[]
    iconList.forEach((item,index)=>{
      const page=Math.floor(index/8)
      if(!pages[page]){
        pages[page]=[]
      }
      pages[page].push(item)
    })
    this.setState({pages})
  }
  render(){
    const {pages}=this.state
    return (
      <div className="Home-icons-wrapper">
        <ReactSwipe swipeOptions={{continuous: false,startSlide: 0}}>
          {pages&&pages.map((icons,index)=>{return <div key={index.toString()}><IconsPage icons={icons}/></div>})}        
        </ReactSwipe>
      </div>
    )
  }
}