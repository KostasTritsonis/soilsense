import { Text, View,ScrollView,Image } from "react-native";
import {router} from 'expo-router';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <Text className="text-secondary-200">Aora</Text>
        <CustomButton title="Continue with Email" handlePress={()=>router.push('/home')} containerStyles="w-full mt-7" />
        <StatusBar backgroundColor="#34d629"  style="light"/>
      </ScrollView>
    </SafeAreaView>
  );
}
