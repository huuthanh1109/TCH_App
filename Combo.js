import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Vouchers from './Vouchers'
import Endow from './Endow'
import Coupons from './Coupons'


const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    
      <Tab.Navigator>

        <Tab.Screen name="Tích điểm" component={Vouchers} />
        <Tab.Screen name="Đổi ưu đãi" component={Endow} />
        <Tab.Screen name="Phiếu ưu đãi" component={Coupons} />
      </Tab.Navigator>
    
  );
}