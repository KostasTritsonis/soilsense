import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress,containerStyles,textStyles,isLoading}) => {
  return (
    <TouchableOpacity
     activeOpacity={0.7}
     onPress={handlePress}
     className={`bg-black rounded-xl min-h-[62px] justify-center items-center ${containerStyles}
     ${isLoading ? 'opacity-50':''}`}
     disabled={isLoading}>
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton