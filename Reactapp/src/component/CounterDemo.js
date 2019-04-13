import React from 'react'

class CounterDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 6 };
    }
    incrementCount = () => {
      this.setState(
            { count: this.state.count + 1 }

        );
    };
  render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementCount}>Clicks: {
                    this.state.count}</button>
            </div>
        );
    }
}
export default CounterDemo;