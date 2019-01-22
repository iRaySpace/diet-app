import * as React from "react";
import Diet from "../../stories/screens/Diet";

import data from "./data";

export default class DietContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDisease: "d01",
      selectedFood: "meat",
      information: ""
    };
  }

  componentDidMount() {
    const { selectedDisease, selectedFood } = this.state;
    this.updateInformation(selectedDisease, selectedFood);
  }

  updateInformation(disease, food) {
    console.log(disease);
    console.log(food)
    this.setState({ information: data[disease][food] });
  }

  onSelectDisease(key) {
    this.setState({ selectedDisease: key });
    this.updateInformation(key, this.state.selectedFood);
  }

  onSelectFood(key) {
    this.setState({ selectedFood: key });
    this.updateInformation(this.state.selectedDisease, key);
  }

  render() {
    return (
      <Diet
        navigation={this.props.navigation}
        information={this.state.information}
        selectedFood={this.state.selectedFood}
        selectedDisease={this.state.selectedDisease}
        onSelectFood={key => this.onSelectFood(key)}
        onSelectDisease={key => this.onSelectDisease(key)}
      />
    );
  }
}
