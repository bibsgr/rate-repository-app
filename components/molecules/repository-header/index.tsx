import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Label from "../../atoms/label/index";
import Icon from "../../atoms/icon/index";
import theme from "../../../theme";

const RepItemHeader = ({ repo }) => {
  return (
    <View className="flex-row pb-3">
        <View style={{ paddingRight: 10 }}>
          <Icon style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
        </View>

        <View style={{ flex: 1 }}>
          <Label style={{fontWeight:"bold"}}>{repo.fullName}</Label>
          <Label>{repo.description}</Label>
        </View>

        <View><Label style={styles.language}>{repo.language}</Label></View>
    </View>
  );
};

export default RepItemHeader;

const styles = StyleSheet.create({
 
  image: {
    height: 48,
    width: 48,
    borderRadius: 10,
  },
  strong: {
    color: "#09f",
    fontWeight: "bold",
    marginBottom: 3,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    fontWeight: "bold",
    borderRadius: 5,
    overflow: "hidden",

    marginVertical: 7,
  },
});
