import './app.css';
import Habits from './components/habits';
import React, { Component } from 'react';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
    input: '',
  };

  render() {
    return (
      <ul>
        <Navbar habitsLength={this.state.habits.length} />
        <div>
          <input
            type="text"
            onChange={(input) => {
              console.log(input.target.value);
              const input2 = input.target.value;
              this.setState({ input: input2 });
            }}
          />
          <button
            onClick={() => {
              this.addHabit(this.state.input);
            }}
          >
            hello
          </button>
        </div>

        <Habits
          habits={this.state.habits}
          handleDecrease={this.handleDecrease}
          handleIncrement={this.handleIncrement}
          handleDelete={this.handleDelete}
        />
        <button
          onClick={() => {
            this.resetHabits();
          }}
        >
          RESET
        </button>
      </ul>
    );
  }

  // Methods
  handleIncrement = (habit) => {
    // 새 습관 배열을 만든다.

    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrease = (habit) => {
    // 새 습관 배열을 만든다.
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count;
    habits[index].count = count <= 0 ? 0 : count - 1;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // 새 습관 배열을 만든다.
    const habits = [...this.state.habits];
    habits.pop(habits);

    this.setState({ habits });
  };

  addHabit = (name) => {
    // 새 습관 배열을 만든다.
    const habits = [
      ...this.state.habits,
      { name, count: 0, id: Date.now().toString() },
    ];
    this.setState({ habits });
  };
  // updateValue = (value) => {
  //   console.log(value);
  // };

  resetHabits = () => {
    const habits = [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ];

    this.setState({ habits });
  };
}

export default App;
