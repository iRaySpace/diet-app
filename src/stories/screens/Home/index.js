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
  Right,
  Item,
  Input
} from "native-base";

import styles from "./styles";

class Home extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content
          padder
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center"
        }}>
          <View>
            <Text style={{
              fontSize: 18,
              color: "white",
              textAlign: "center",
              marginBottom: 15
            }}>
              Enter your full name, and age
            </Text>
            <Item rounded style={{ marginBottom: 15 }}>
              <Icon
                active
                name="person"
                style={{ color: "white" }}
              />
              <Input
                placeholder="John Doe"
                placeholderTextColor="#fff"
                style={{ color: "white" }}
              />
            </Item>
            <Item rounded>
              <Icon
                active
                name="calendar"
                style={{ color: "white" }}
              />
              <Input
                placeholder="18"
                placeholderTextColor="#fff"
                style={{ color: "white" }}
              />
            </Item>
            <Button
              full
              rounded
              onPress={() => this.props.navigation.navigate("Diet")}
              style={{
                marginTop: 30,
                backgroundColor: "#F5A91B"
            }}>
              <Text>Select Disease</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Home;
