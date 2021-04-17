import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ItemTabBarBottom from './ItemTabNavigation';
import {Colors, Icons} from '../../../assets';
import {
  cartScreen,
  homeScreen,
  ordersScreen,
  settingScreen,
} from '../../../screens';
const Tab = createBottomTabNavigator();

const customeTabOptions = {
  activeTintColor: Colors.orangeCarrot,
  style: {
    height: 80,
  },
  labelStyle: {
    bottom: 10,
  },
  showLabel: false,
};

enum ScreenName {
  Home = 'Home',
  Order = 'Order',
  Carts = 'Carts',
  Info = 'Info',
}

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({focused, color}) => {
            let image;
            let label;
            switch (route.name) {
              case ScreenName.Home:
                image = Icons.home.stores;
                break;
              case ScreenName.Order:
                image = Icons.home.order;
                break;
              case ScreenName.Carts:
                image = Icons.home.cart;
                break;
              case ScreenName.Info:
                image = Icons.home.setting;
                break;
            }

            return (
              <ItemTabBarBottom
                imageUri={image}
                tintColor={color}
                isFocused={focused}
                textLabel={label}
              />
            );
          },
        };
      }}
      tabBarOptions={customeTabOptions}>
      <Tab.Screen name={ScreenName.Home} component={homeScreen} />
      <Tab.Screen name={ScreenName.Order} component={ordersScreen} />
      <Tab.Screen name={ScreenName.Carts} component={cartScreen} />
      <Tab.Screen name={ScreenName.Info} component={settingScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
