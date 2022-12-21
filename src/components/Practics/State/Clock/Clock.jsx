import React from 'react';
export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };
  intervalID = null;
  componentDidMount() {
    this.intervalID = setInterval(
      () =>
        this.setState({
          time: new Date().toLocaleTimeString(),
        }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
    this.stop();
  }
  stop = () => {
    clearInterval(this.intervalID);
  };
  render() {
    return (
      <div>
        {this.state.time}
        <button type="button" onClick={this.stop}>
          Остановить
        </button>
      </div>
    );
  }
}
