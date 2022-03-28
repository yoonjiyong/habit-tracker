import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  // Build
  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => {
          return (
            <Habit
              key={habit.id}
              handleDecrease={this.props.handleDecrease}
              handleIncrement={this.props.handleIncrement}
              handleDelete={this.props.handleDelete}
              habit={habit}
            />
          );
        })}
      </ul>
    );
  }
}

export default Habits;
