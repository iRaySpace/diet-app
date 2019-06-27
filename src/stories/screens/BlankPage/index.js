import * as React from "react";
import { ImageBackground } from "react-native";
import { Container, Header, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
import Suggestion from "./components/Suggestion";

class BlankPage extends React.Component {
	render() {
		return (
			<Container style={styles.container}>
				<ImageBackground
					source={require("../../../../assets/header.jpg")}
					style={{ width: "100%", height: 180 }}
				>
					<Header style={{
						backgroundColor: "transparent",
						elevation: 0
					}}>
						<Left>
							<Button transparent onPress={() => this.props.navigation.goBack()}>
								<Icon name="ios-arrow-back" />
							</Button>
						</Left>
						<Body style={{ flex: 3 }} />
						<Right />
					</Header>
				</ImageBackground>
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
					<Text style={{
						fontSize: 18,
						fontWeight: "bold",
						color: "#777",
						marginTop: 15,
						marginBottom: 10
					}}>
						Suggestions
					</Text>
					<Suggestion
						food={this.props.food}
						disease={this.props.disease}
					/>
				</Content>
			</Container>
		);
	}
}

export default BlankPage;
