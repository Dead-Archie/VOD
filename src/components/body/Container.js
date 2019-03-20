import React, { Component } from 'react'
import Cards from './Cards';

export class Container extends Component {
  render() {
    return (
      <div>
        <Cards name="item 1"/>
      </div>
    )
  }
}

export default Container
