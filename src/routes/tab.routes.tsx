import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native'

const Tab = createMaterialTopTabNavigator();
import { Home } from '../pages/home';
import { Teste } from '../pages/teste';
import { PlayMusic } from '../pages/play';

import { MyTabBar } from './tabs/tab';

export default function Tabs() {
  return (
      <Tab.Navigator
        screenOptions={{ 
          swipeEnabled:false,
          animationEnabled: true,
          tabBarScrollEnabled: true,
        }}
        tabBar={(props: any) => <MyTabBar {...props} />}
      >
        <Tab.Screen name="Home" options={{ tabBarLabel: 'Lista de reprodução', tabBarActiveTintColor:  'blue'}} component={Home} />
        <Tab.Screen name="Teste" options={{ tabBarLabel: 'Favoritos'}} component={PlayMusic} />
        <Tab.Screen name="Home2" options={{ tabBarLabel: 'Faixas'}}  component={Home} />
      </Tab.Navigator>
  );
}