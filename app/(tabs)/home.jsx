import { View, Text,Image} from 'react-native'
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from 'react-native-safe-area-context'
import {icons} from '../../constants';



const Home = () => {
  return (
    <SafeAreaView className="bg-secondary h-full">
      <View className="my-6 px-4 space-y-6">
        <View className="justify-between items-start flex-row mb-6">
          <View>
            <Text className="font-medium text-sm text-gray-100">Welcome back</Text>
            <Text className="text-2xl font-psemibold text-white">Kostas</Text>
          </View>

          <View className="mt-1.5">
            <Image source={icons.soilsense}
            className="w-9 h-10"
            resizeMode='contain'/>
          </View>
        </View>
        <View className="w-full flex-1 pt-5 pb-8 font-pregular mb-3">
          <Text className="text-gray-100">Treding Videos</Text>
        </View>
      </View>
      <StatusBar backgroundColor="#161622"  style="light"/>
    </SafeAreaView>
    
  )
}

export default Home