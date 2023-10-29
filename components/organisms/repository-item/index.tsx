import React from "react";
import { View, StyleSheet, Image } from "react-native";
import RepItemHeader from "../../molecules/repository-header/index";
import StatItem from "../../molecules/stat-item/index";

const RepositoryItem = ({ repo }) => {
  return (  
    <View key={repo.id} style={styles.container}>
      <RepItemHeader repo={repo} />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>      
        <StatItem value={repo.stargazersCount}> Stars </StatItem>
        <StatItem value={repo.forksCount}> Forks </StatItem>
        <StatItem value={repo.reviewCount}> Reviews </StatItem>
        <StatItem value={repo.ratingAverage}> Rating </StatItem>  
      </View>
    </View>
  );
};

export default RepositoryItem;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "white"
  },
  image:{
    width:60,
    height:60,
    borderRadius:10
  },
  language: {
    padding: 4,
    color: "white",
    backgroundColor: "orange",
    alignSelf: "flex-start",
    fontWeight: "bold",
    borderRadius: 5,
    overflow: "hidden",

    marginVertical: 7,
  },
});
