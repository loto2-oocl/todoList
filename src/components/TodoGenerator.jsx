import React, { Component } from 'react';

export default class TodoGenerator extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="input a new todo here" />
        <button>add</button>
      </div>
    );
  }
}
