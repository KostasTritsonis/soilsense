import { Text, View,ScrollView,Image } from "react-native";
import {router} from 'expo-router';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import {icons} from '../constants/'

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
      <View className="w-full pt-20 justify-center items-center min-h-[50vh] mt-20">
          <Image 
            source={icons.soilsense}
            className="w-[215px] h-[155px]"
            reziseModed="contain" />
        </View>
        <CustomButton title="Welcome to SoilSense" handlePress={()=>router.push('/home')} containerStyles="w-full" />
        <StatusBar backgroundColor="#f5f5f5"  style="dark"/>
      </ScrollView>
    </SafeAreaView>
  );
}
