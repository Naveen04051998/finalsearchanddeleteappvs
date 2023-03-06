import React, { Component } from 'react';
import "./App.css"

export default class Welcome extends Component {
  
  render() {
    const{name}=this.props
    return (
      <div>
        <h1 className='heading'>hello {name}</h1>
      </div>
    );
  }
}
