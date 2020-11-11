import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class Bar extends Component {
  render() {
    const { value, color } = this.props;

    return (
     <div 
      style = {{
        marginTop: "40px",
        height: "20px",
        width: `${value}%`,
        background: color
      }}
     ></div>
    )
  }
}
