import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <span>{this.props.habitsLength}</span>
      </div>
    );
  }
}

export default Navbar;
