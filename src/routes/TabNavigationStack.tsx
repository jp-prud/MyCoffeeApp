import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {CartScreen, HomeScreen, OutletScreen, ProfileScreen} from '@screens';

import {AppTabNavigatorParamList} from './navigationTypes';
import {TabBar} from './TabBar';

const {Navigator, Screen} =
  createBottomTabNavigator<AppTabNavigatorParamList>();

export function TabNavigationStack() {
  const TAB_NAVIGATOR_SCREEN_OPTIONS: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
  };

  function renderTabBar(props: BottomTabBarProps) {
    return <TabBar {...props} />;
  }

  return (
    <Navigator
      screenOptions={TAB_NAVIGATOR_SCREEN_OPTIONS}
      tabBar={renderTabBar}>
      <Screen name="HomeScreen" component={HomeScreen} />

      <Screen name="CartScreen" component={CartScreen} />

      <Screen name="OutletScreen" component={OutletScreen} />

      <Screen name="ProfileScreen" component={ProfileScreen} />
    </Navigator>
  );
}