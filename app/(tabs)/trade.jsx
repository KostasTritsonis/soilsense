import { View, Text,Image,ScrollView,TouchableOpacity,FlatList } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from 'react-native-safe-area-context';
import TradeCard from '../../components/TradeCard';
import {icons} from "../../constants";

const Trade = () => {

  const [list, setList] = useState([]);

  const addComponent = () => {
    setList(prevList => [
      ...prevList, 
      {id:prevList.length.toString(),text:<TradeCard icon={icons.olive} title="Olive oil" value="10" region="Aliveri" producer="Kostas T."/>}
    ]);
  };
  return (
    <SafeAreaView className="bg-secondary h-full">
      <FlatList
          data={list}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View className="mt-2 justify-center items-center">
              <Text>{item.text}</Text>
            </View>
          )}
        />
      <TouchableOpacity className="z-0 h-[1px] left-[300px] bottom-[70px]" onPress={addComponent}>
        <Image source={icons.plus1} />
      </TouchableOpacity>
  </SafeAreaView>
  )
}

export default Trade