import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';

class Habit extends Component {
  // Build
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>

        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrease}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }

  // Methods
  handleIncrement = () => {
    this.props.handleIncrement(this.props.habit);
  };

  handleDecrease = () => {
    this.props.handleDecrease(this.props.habit);
  };

  handleDelete = () => {
    this.props.handleDelete(this.props.habit);
  };
}

export default Habit;
