import React from "react";
//  This is javascript class component.
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 2 };
    //Binding this method  to current element.
    this.eventDecrement = this.eventDecrement.bind(this);
    this.eventIncrement = this.eventIncrement.bind(this);
  }

  // eventhandler method
  eventDecrement() {
    this.setState((curState) => {
      return {
        count: curState.count - 1,
      };
    });
  }
  // eventhandler method
  eventIncrement() {
    this.setState((curState) => {
      return {
        count: curState.count + 1,
      };
    });
  }

  render() {
    const date = new Date("mar 20 2025");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.eventDecrement}>0</button>
        <span>
          {" "}
          {date.toDateString()} {this.state.count}
        </span>
        <button onClick={this.eventIncrement}>1</button>
      </div>
    );
  }
}

export default Counter;
