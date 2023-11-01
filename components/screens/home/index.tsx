import React from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import repos from "../../../data/repositories";
import BackButton from "../../molecules/back-button/index";
import RepositoryItem from "../../organisms/repository-item/index";

const Main = () => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={repos}
        ItemSeparatorComponent={() => <Text></Text>}
        renderItem={({ item: repo }) => <RepositoryItem repo={repo} />}
      />
    </View>
  );
};

export default Main;
