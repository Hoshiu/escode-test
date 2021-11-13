import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'

class AddMarkdown extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ReactMarkdown children={this.props.descrption} />
    )
  }
}

export default AddMarkdown