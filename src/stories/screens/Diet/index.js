import * as React from "react";
import { View,ScrollView } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";

import DietCard from "../../../component/DietCard";

class Diet extends React.Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#3C54D4" }}>
        <Content padder>
          <View style={{ marginTop: 15, marginBottom: 10 }}>
            <Text style={{
              color: "white",
              fontSize: 24,
              marginBottom: 10,
              textAlign: "center"
            }}>
              Are you diagnosed with?
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <DietCard
                first
                text="Fatty Liver Disease"
                onPress={() => this.props.onPressDisease("d01")}
                image={require("../../../../assets/diseases/fatty-liver.jpg")}
              />
              <DietCard
                text="Arthritis"
                onPress={() => this.props.onPressDisease("d02")}
                image={require("../../../../assets/diseases/arthritis.jpg")}
              />
              <DietCard
                text="Cardiovascular Disease"
                onPress={() => this.props.onPressDisease("d03")}
                image={require("../../../../assets/diseases/cardiovascular-disease.jpg")}
              />
              <DietCard
                text="Type 2 Diabetes"
                onPress={() => this.props.onPressDisease("d04")}
                image={require("../../../../assets/diseases/type2-diabetes.jpg")}
              />
              <DietCard
                text="Hypertension"
                onPress={() => this.props.onPressDisease("d05")}
                image={require("../../../../assets/diseases/hypertension.jpg")}
              />
            </ScrollView>
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text style={{
              color: "white",
              fontSize: 24,
              marginBottom: 10,
              textAlign: "center"
            }}>
              Do you want to eat?
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <DietCard
                first
                text="Fruits"
                onPress={() => this.props.onPressFood("frvg")}
                image={require("../../../../assets/foods/fruits-vegetables.jpg")}
              />
              <DietCard
                text="Fish"
                onPress={() => this.props.onPressFood("fish")}
                image={require("../../../../assets/foods/fish.jpg")}
              />
              <DietCard
                text="Meat"
                onPress={() => this.props.onPressFood("meat")}
                image={require("../../../../assets/foods/meat.jpg")}
              />
            </ScrollView>
          </View>
          <Button
            block
            rounded
            style={{ backgroundColor: "#F5A91B" }}
            disabled={(!this.props.selectedDisease || !this.props.selectedFood)}
            onPress={() => this.props.navigate("BlankPage", {
              food: this.props.selectedFood,
              disease: this.props.selectedDisease
            })}
          >
            <Text>Check Recommendations</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Diet;
