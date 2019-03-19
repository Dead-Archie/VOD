import React, { Component } from 'react'

class PropsTag extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'axtria'
      }
    }

    ChangeHandeler = (e)=>{
        this.setState({
            name: e.target.value
        })
    }
    
  render() {
    return (
      <div>
        props - > {this.props.name} <br/>
        state - > {this.state.name} <br/>
        <input type="text" value={this.state.name} onChange={(event)=>this.ChangeHandeler(event)}/>
      </div>
    )
  }
}

export default PropsTag
