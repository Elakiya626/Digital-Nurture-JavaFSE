import { Component } from "react";

class CountPeople extends Component {

  constructor() {
    super();

    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  login = () => {
    this.setState({
      entrycount: this.state.entrycount + 1
    });
  };

  exit = () => {
    this.setState({
      exitcount: this.state.exitcount + 1
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Mall Entry Counter</h1>

        <h2>People Entered : {this.state.entrycount}</h2>

        <button onClick={this.login}>
          Login
        </button>

        <br /><br />

        <h2>People Exited : {this.state.exitcount}</h2>

        <button onClick={this.exit}>
          Exit
        </button>
      </div>
    );
  }
}

export default CountPeople;