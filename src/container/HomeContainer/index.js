import * as React from "react";
import { observer, inject } from "mobx-react/native";

import Home from "../../stories/screens/Home";

@inject("mainStore")
@observer
export default class HomeContainer extends React.Component {
	render() {
		return <Home navigation={this.props.navigation} />;
	}
}
