import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Picker,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

import styles from "./styles";
import PickerAndroid from "../../../theme/components/Picker.android";
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
        <Content padder>
          <Text>Select Disease</Text>
          <Picker mode="dropdown">
            <Picker.Item label="Heart Disease 1" value="hd01" />
            <Picker.Item label="Heart Disease 2" value="hd02" />
            <Picker.Item label="Heart Disease 3" value="hd03" />
          </Picker>
        </Content>
      </Container>
    );
  }
}

export default Home;
