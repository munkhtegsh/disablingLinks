import React, { Component } from "react";

export default class CustomLink extends Component {
  render() {
    return (
      <div>
        <a href={this.props.href} target="_blank"> {this.props.text} </a>
      </div>
    );
  }
}

// CustomLink.defaultProps = {
  // href: 'https://www.mobicom.mn',
  // text: 'This is a link',

// }