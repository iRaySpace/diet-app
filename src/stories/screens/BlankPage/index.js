import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";

class BlankPage extends React.Component {
	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>Foods &amp; Servings Suggestion</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					<Text style={{
						fontSize: 24,
						color: "#3C54D4",
						fontWeight: "bold",
					}}>
						{this.props.disease} > {this.props.food}
					</Text>
					<Text style={{ color: "#777" }}>
						Foods/Servings Suggestions
					</Text>
					<Text>{this.props.information}</Text>
				</Content>
			</Container>
		);
	}
}

export default BlankPage;
