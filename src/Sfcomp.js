import React, { Component } from 'react'

export default class Sfcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Praveen"
      }
    }
  render() {
    return (
      <div>
      <h1>HELLO {this.state.name}</h1>
      <h1>Welcome to SKCET</h1>
      </div>
    )
  }
}
