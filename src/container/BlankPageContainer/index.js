import * as React from "react";
import BlankPage from "../../stories/screens/BlankPage";

import data from "../../data";

export default class BlankPageContainer extends React.Component {
	render() {
		const { food, disease } = this.props.navigation.state.params;
		return (
			<BlankPage
				navigation={this.props.navigation}
				information={data[disease][food]}
			/>
		);
	}
}
