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
					<Text>{this.props.information}</Text>
				</Content>
			</Container>
		);
	}
}

export default BlankPage;
