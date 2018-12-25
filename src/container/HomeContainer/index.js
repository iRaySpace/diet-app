import * as React from "react";
import { observer, inject } from "mobx-react/native";

import Home from "../../stories/screens/Home";
import data from "./data";

@inject("mainStore")
@observer
export default class HomeContainer extends React.Component {
	componentWillMount() {
		this.props.mainStore.fetchItems(data);
	}
	render() {
		const list = this.props.mainStore.items;
		return <Home navigation={this.props.navigation} list={list} />;
	}
}
