import * as React from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

import styles from "./styles";

class Home extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content
          padder
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center"
        }}>
          <View>
            <Text style={{
              fontSize: 30,
              textAlign: "center"
            }}>
              Welcome to
            </Text>
            <Text style={{
              fontSize: 48,
              fontWeight: "bold",
              textAlign: "center"
            }}>
              KaDiet!
            </Text>
            <Button
              onPress={() => this.props.navigation.navigate("Diet")}
              style={{
                marginTop: 15,
                alignSelf: "center"
            }}>
              <Text>Check your Diet</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Home;
