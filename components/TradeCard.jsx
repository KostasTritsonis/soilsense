import { View, Text,TouchableOpacity,Image } from 'react-native';
import React, { useState } from 'react';
import {icons} from "../constants";

const TradeCard = ({value,title,region,producer,icon}) => {

  const [isVisible, setIsVisible] = useState(true);
  return (
    <View>
      {isVisible && (
        <TouchableOpacity className="flex border-2 bg-white rounded-lg
        w-[80vw] p-1 items-center" onPress={() => setIsVisible(false)}
        >
            <View className="">
            <Image source={icon}
                className="w-15 h-15"
                resizeMode='contain'/>
            </View>
            <View className="">
              <Text className={`text-black font-psemibold text-s`}>title:{title}</Text>
              <Text className={`text-black font-psemibold text-s`}>value:{value}</Text>
              <Text className={`text-black font-psemibold text-s`}>producer:{producer}</Text>
              <Text className={`text-black font-psemibold text-s`}>region:{region}</Text>
            </View>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default TradeCard