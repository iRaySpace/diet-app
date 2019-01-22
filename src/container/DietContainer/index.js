import * as React from "react";
import Diet from "../../stories/screens/Diet";

export default class DietContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDisease: "d01",
      selectedFood: "f01"
    };
  }

  onSelectDisease(key) {
    this.setState({ selectedDisease: key });
  }

  onSelectFood(key) {
    this.setState({ selectedFood: key });
  }

  render() {
    return (
      <Diet
        navigation={this.props.navigation}
        selectedFood={this.state.selectedFood}
        selectedDisease={this.state.selectedDisease}
        onSelectFood={key => this.onSelectFood(key)}
        onSelectDisease={key => this.onSelectDisease(key)}
      />
    );
  }
}
