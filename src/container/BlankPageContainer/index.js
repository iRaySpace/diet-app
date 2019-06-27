import * as React from "react";
import BlankPage from "../../stories/screens/BlankPage";

import data from "../../data";

const DISEASES = {
	"d01": "Fatty Liver Disease",
	"d02": "Arthritis",
	"d03": "Cardiovascular Disease",
	"d04": "Type 2 Diabetes",
	"d05": "Hypertension"
};

const FOODS = {
	"frvg": "Fruit",
	"fish": "Fish",
	"meat": "Meat"
};

export default class BlankPageContainer extends React.Component {
	render() {
		const { food, disease } = this.props.navigation.state.params;
		return (
			<BlankPage
				food={FOODS[food]}
				disease={DISEASES[disease]}
				navigation={this.props.navigation}
				information={data[disease][food]}
			/>
		);
	}
}
