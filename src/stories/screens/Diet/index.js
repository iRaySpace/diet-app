import * as React from "react";
import { View } from "react-native";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Picker } from "native-base";

class Diet extends React.Component {
  render() {
    return (
      <Container>
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
          <Body style={{ flex: 3 }}>
            <Title>Diet</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <View style={{ marginBottom: 10 }}>
            <Text style={{
              color: "gray",
              fontWeight: "bold",
            }}>
              Select Disease
            </Text>
            <Picker
              note
              mode="dropdown"
              onValueChange={this.props.onSelectDisease}
              selectedValue={this.props.selectedDisease}
            >
              <Picker.Item label="Fatty Liver Disease" value="d01" />
              <Picker.Item label="Athritis" value="rd02" />
              <Picker.Item label="Cardiovascular Disease" value="d03" />
              <Picker.Item label="Type 2 Diabetes" value="d04" />
              <Picker.Item label="Hypertension" value="d05" />
            </Picker>
          </View>
          <View>
            <Text style={{
              color: "gray",
              fontWeight: "bold"
            }}>
              Select Food
            </Text>
            <Picker
              note
              mode="dropdown"
              onValueChange={this.props.onSelectFood}
              selectedValue={this.props.selectedFood}
            >
              <Picker.Item label="Meat" value="f01" />
              <Picker.Item label="Fruits and Vegetables" value="f02" />
              <Picker.Item label="Fish" value="f03" />
            </Picker>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Diet;
