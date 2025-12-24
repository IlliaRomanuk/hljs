import React, { Component } from "react";
import Result from "./result";
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  handelToggleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div className="showResult">
        <button className="button" onClick={this.handelToggleShow}>
          {this.state.show ? "Hide Result" : "Show Result"}
        </button>

        {this.state.show && (
          <Result votes={this.props.votes} stickers={this.props.stickers} />
        )}
      </div>
    );
  }
}
export default Button;
