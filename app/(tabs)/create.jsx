import React from 'react';
import MapView from 'react-native-maps';
import { View,Text,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../../components/Map';

const Create = () => {

  const OpenMap = () => {
    <Map />
  }

  return (
    <SafeAreaView className="bg-secondary h-full">
      <View className="justify-center items-center m-auto">
        <TouchableOpacity className="bg-green rounded-xl w-[50vw] h-[80px] justify-center items-center" onPress={OpenMap}>
          <Text className="text-[17px] font-bold">Create a Field</Text>
        </TouchableOpacity>      
      </View>
    </SafeAreaView>
  );
}

export default Create