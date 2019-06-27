import * as React from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  Card,
  CardItem,
  Text
} from "native-base";

const DietCard = (props) => (
  <TouchableOpacity onPress={props.onPress} >
    <Card style={{
      width: 200,
      marginLeft: props.first ? 0 : 10
    }}>
      <CardItem cardBody>
        <Image
          style={{ flex: 1 }}
          source={props.image}
        />
      </CardItem>
      <CardItem style={{
        flex: 1,
        borderTopWidth: 1,
        borderColor: "#efefef",
        backgroundColor: props.highlight ? "#F5A91B" : "white",
      }}>
        <Text style={{
          flex: 1,
          color: "#4c4c4c",
          fontSize: 18,
          textAlign: "center"
        }}>
          {props.text}
        </Text>
      </CardItem>
    </Card>
  </TouchableOpacity>
);

export default DietCard;
