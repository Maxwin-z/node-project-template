import React from 'react';

export default class Counter extends React.Component {
  constructor(context) {
    super(context);
    this.state = {val: 0};
  }

  onClick() {
    this.setState({
      val: this.state.val + 1
    })
  }

  render() {
    return (
      <div>
        {this.state.val}
        <button onClick={this.onClick.bind(this)}>+</button>
      </div>
    );
  }
}
