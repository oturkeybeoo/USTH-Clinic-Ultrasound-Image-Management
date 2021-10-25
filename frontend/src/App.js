import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import Navbar from './components/Doctor/Navbar'
export class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
      </div>
    )
  }
}

export default App
