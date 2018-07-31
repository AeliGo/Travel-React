import React from 'C:/Users/kun12/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react'
import {
  BrowserRouter as Router,
  Route
} from 'C:/Users/kun12/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom'

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
          <Route path="/detail" component={Detail}/>
        </div>
      </Router>
    )
  }
}