import React, { Component } from 'react'
import './App.css'
import Card from './components/Card'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div>
        Recommend the best local food in your area. Anything below 5 stars will be removed.
      </div>
        <div>
          <input type='search' />
        </div>
        <div>
          <Card />
        </div>
      </div>
    )
  }
}

export default App
