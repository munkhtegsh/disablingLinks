import React, { Component } from 'react';
import CustomLink from "./CustomLink";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      href: 'https://www.mobicom.mn',
      text: 'This is a link',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //check it has href property? 
      //if yes remove it 
      //if not add it
    const state = {...this.state};
    if(state.href) {
      this.setState({href: undefined});
    } else {
      this.setState({href: 'https://www.mobicom.mn'});
    }
  }

  render() {
    return (
      <div>
        <CustomLink href={this.state.href} text={this.state.text}/>
        <CustomLink href={this.state.href} text={this.state.text}/>
        <CustomLink href={this.state.href} text={this.state.text}/>
        <button onClick={this.handleClick}> Click </button>

      </div>
    );
  }
}

export default App;
