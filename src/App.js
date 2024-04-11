import React from 'react'
import axios from 'axios'

class App extends React.Component {
  state = {
    advice: ''
  };
  componentDidMount() {
    console.log("componentDidMount")
  }
  render() {
    return (
      <h1>App</h1>
    )
  }
}

export default App