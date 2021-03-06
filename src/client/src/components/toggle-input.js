import React, { Component } from 'react'

class ChordName extends Component {
  state = {
    editable: false
  }

  setName = (e) => {
    this.props.chordName(e.target.value, this.props.id);
    this.setState({
      editable: !this.state.editable
    })

  }

  toggleState = () => {
    this.setState({
      editable: !this.state.editable
    })
  }

  ifEmpty(value) {
    if(value.length <= 0) {
      return '...'
    } else {
      return value;
    }
  }

  render() {
    return (
      <div>
        {this.state.editable ?
          <input type="text" placeholder="test" autoFocus onBlur={this.setName}/> :
          <p style={{display:"inline-block", width: "120px", height: "30px"}} onClick={this.toggleState}>{this.ifEmpty(this.props.name)}</p>
        }
      </div>
    )
  }
}


export default ChordName;
