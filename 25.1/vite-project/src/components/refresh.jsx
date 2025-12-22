
import React, { Component } from "react";
class Refresh extends Component {
    constructor(props) {
        super(props);
      }
  handelToggleUpdate = () => {
    localStorage.removeItem("votes");
    this.props.onReset();
}
  render() {
    return (
        <button className="buttonRefresh" onClick={this.handelToggleUpdate}>refresh</button>
    );
  }
}
export default Refresh;