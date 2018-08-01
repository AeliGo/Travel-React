import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from '@/pages/home/Home'
import Detail from '@/pages/detail/Detail'
import City from '@/pages/city/City'



export default class App extends React.Component{
  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/city" component={City}/>
          <Route path="/detail/:id" component={Detail}/>
        </div>
      </Router>
    )
  }
}