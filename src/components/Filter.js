import React from "react";

class Filter extends React.Component {

  render() {
    return (
      <div>
        <button onClick={() => this.props.updateState("isGreased")}>Filter Greased</button>
        <button onClick={() => this.props.updateState("sortName")}>Sort Name</button>
        <button onClick={() => this.props.updateState("sortWeight")}>Sort Weight</button>
      </div>
    )
  }
}

export default Filter;



