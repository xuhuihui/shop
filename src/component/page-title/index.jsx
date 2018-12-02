import React, { Component } from 'react'

export default class PageTitle extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = this.props.title + '- HAPPY MALL';
  }

  render() {
    const { title } = this.props
    return (
      <div className="row">
        <div className="col-md-12">
          <h1 className="page-header">{title}</h1>
          {this.props.children}
        </div>
      </div>
    )
  }
}
