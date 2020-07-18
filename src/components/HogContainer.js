import React from "react";
import Filter from "./Filter";
import Hog from "./Hog";

class HogContainer extends React.Component {
  
  state = {
    isGreased: false,
    sortName: false,
    sortWeight: false
  }

  updateState = (value) => {
    this.setState({
      // love this syntax - clean and easy
      [value]: !this.state[value]
    })
  }

  // toggleGreased = () => {
  //   this.setState({
  //     isGreased: !this.state.isGreased
  //   })
  // }

  // toggleSortByName = () => {
  //   this.setState({
  //     sortName: !this.state.sortName
  //   })
  // }

  // toggleSortByWeight = () => {
  //   console.log("change")
  //   this.setState({
  //     sortWeight: !this.state.sortWeight
  //   })
  // }

  renderHogs() {

    let filteredHogs = [...this.props.hogs]
    if (this.state.isGreased) {
     filteredHogs = this.props.hogs.filter(hog => hog.greased)
    }
    if (this.state.sortName) {
      filteredHogs.sort((hogA, hogB) => hogA.name.localeCompare(hogB.name))
    }
    if (this.state.sortWeight) {
      filteredHogs.sort((hogA, hogB) => hogA.weight - hogB.weight)
    }
    return filteredHogs.map(hog => <Hog key={hog.name} hog={hog} />)
  }

  render() {
    // console.log(this.props.hogs)
    return (
      <div>
        <Filter updateState={this.updateState} />
        {/* <Filter toggleGreased={this.toggleGreased} toggleSortByName={this.toggleSortByName} toggleSortByWeight={this.toggleSortByWeight} /> */}
        {this.renderHogs()}
      </div>
    )
  }
}

export default HogContainer;
