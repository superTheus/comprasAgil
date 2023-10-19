import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { TabBarAdvancedButton } from "./TabBarAdvancedButton";
import { Badge } from "react-native-paper";
import { TabParamList } from "./types";
import Cart from "../views/tabs/Cart";
import Clients from "../views/tabs/Clients";
import Requests from "../views/tabs/Requests";
import Home from "../views/tabs/Home";
import { colors } from "../constants/Colors";
import Search from "../views/tabs/Search";

const BottomBar = createBottomTabNavigator<TabParamList>();

type Props = {
  barColor?: string;
  isBtnDisabled?: boolean;
  hasNotification?: boolean;
};

export const BottomTab: React.FC<Props> = ({
  barColor = colors.white,
  isBtnDisabled = false,
  hasNotification = false,
  ...props
}) => {

  const [isIphone, setIsIphone] = useState(false);

  return (
    <BottomBar.Navigator
      tabBar={(props) => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
          {isIphone && (
            <View
              style={[
                styles.xFillLine,
                {
                  backgroundColor: barColor,
                },
              ]}
            />
          )}
        </View>
      )}
    >
      <BottomBar.Screen
        name="InitialScreen"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="file" size={24} color={color} />
          ),
        }}
      />

      <BottomBar.Screen
        name="RequestScreen"
        component={Requests}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="file" size={24} color={color} />
          ),
        }}
      />

      <BottomBar.Screen
        name="SearchScreen"
        component={Search}
        options={{
          tabBarButton: (props) => (
            <TabBarAdvancedButton bgColor={barColor} {...props} />
          ),
        }}
      />

      <BottomBar.Screen
        name="ClientScreen"
        component={Clients}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name="bell" size={24} color={color} />
              {hasNotification && <Badge />}
            </View>
          ),
        }}
      />
      <BottomBar.Screen
        name="CartScreen"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search" size={24} color={color} />
          ),
        }}
      />
    </BottomBar.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigatorContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: "transparent",
    elevation: 30,
  },
  tabIconStyle: {
    color: colors.text,
  },
  xFillLine: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 34,
  },
});

export default BottomTab;