import * as React from "react";

import Diet from "../../stories/screens/Diet";

export default class DietContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDisease: "",
      selectedFood: ""
    };
  }

  onPressDisease(key) {
    this.setState({ selectedDisease: key });
  }

  onPressFood(key) {
    this.setState({ selectedFood: key });
  }

  render() {
    return (
      <Diet
        navigate={this.props.navigation.navigate}
        selectedFood={this.state.selectedFood}
        selectedDisease={this.state.selectedDisease}
        onPressFood={key => this.onPressFood(key)}
        onPressDisease={key => this.onPressDisease(key)}
      />
    );
  }
}
