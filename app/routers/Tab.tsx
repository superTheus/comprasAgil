import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Home from '../views/tabs/Home';
import { TabParamList } from './types';
import Clients from '../views/tabs/Clients';
import { View, Text } from 'react-native';
import Cart from '../views/tabs/Cart';
import Search from '../views/tabs/Search';
import Requests from '../views/tabs/Requests';
import { colors } from '../constants/Colors';

const Tab = createMaterialBottomTabNavigator<TabParamList>();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="InitialScreen"
      activeColor="#ffffff"
      inactiveColor="#ffffff"
      barStyle={{ backgroundColor: colors.purple }}
    >
      <Tab.Screen
        name="InitialScreen"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ClientScreen"
        component={Clients}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-friends" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={Cart}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shopping-cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="RequestScreen"
        component={Requests}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}