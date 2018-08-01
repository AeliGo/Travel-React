import React from 'react'

export default class Detail extends React.Component{
  render(){
    return (
      <h1>detail{this.props.match.params.id}</h1>
    )
  }
}