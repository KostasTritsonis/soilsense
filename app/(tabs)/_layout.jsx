import { View, Text, Image } from 'react-native'
import {Tabs,Redirect} from 'expo-router';
import {icons} from '../../constants';

const TabIcon = ({icon,color,name,focused}) => {
  return(
    <View className="flex-1 items-center justify-center gap-2 mt-2">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold':'font-pregular'}
       text-xs w-full` } style={{color:color}}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <Tabs 
      screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor: '#06DC10',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle:{
          backgroundColor: '#161622',
          borderTopWidth:1,
          height: 74,
        }
      }}>
      <Tabs.Screen
        name='home'
        options={{
          title:'Home',
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen
      name='trade'
      options={{
        title:'Trade',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
          <TabIcon
            icon={icons.trade}
            color={color}
            name="Trade"
            focused={focused}
          />
        )
      }}
      />
      <Tabs.Screen
      name='create'
      options={{
        title:'Create',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
          <TabIcon
            icon={icons.plus}
            color={color}
            name="Create"
            focused={focused}
          />
        )
      }}
      />
     <Tabs.Screen
      name='profile'
      options={{
        title:'Profile',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
          <TabIcon
            icon={icons.profile}
            color={color}
            name="Profile"
            focused={focused}
          />
        )
      }}
      />
    </Tabs>
  )
}

export default TabsLayout