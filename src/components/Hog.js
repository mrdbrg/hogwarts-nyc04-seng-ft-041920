import React from "react";

class Hog extends React.Component {

  state = {
    isDisplayed: false
  }
  renderImageSrc(name) {
    const formattedName = name.toLowerCase().split(" ").join("_")
    // const formattedName = name.replace(/ /g,"_").toLowerCase()
    const pigImage = require(`../hog-imgs/${formattedName}.jpg`)
    return pigImage
  }

  handleToggle = () => {
    this.setState(prevState => {
      return {
        isDisplayed: !prevState.isDisplayed
      }
    })
  }

  render()  {
    return (
      <div onClick={this.handleToggle}>
        <img src={this.renderImageSrc(this.props.hog.name)} />
        <h4>{this.props.hog.name}</h4>
        {
          this.state.isDisplayed && 
          <div>
            <h5>Specialty: {this.props.hog.specialty}</h5>
            <h5>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</h5>
            <h5>Greased: {this.props.hog.greased ? "Yes": "No"}</h5>
            <h5>Weight: {this.props.hog.weight} pounds</h5>  
          </div>
        }
      </div>
    )
  }
}

export default Hog;