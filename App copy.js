// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Login from './Vouchers';

// // function HomeScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>Home Screen</Text>
// //       <Button
// //         title="Go to Details"
// //         onPress={() => navigation.navigate('Login')}
// //       />
// //     </View>
// //   );
// // }

// // function DetailsScreen() {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>Details Screen</Text>
// //     </View>
// //   );
// // }

// // const Stack = createStackNavigator();

// // function App() {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName="Home">
// //         {/* <Stack.Screen name="Home." component={HomeScreen} /> */}
// //         {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
// //         <Stack.Screen name="Login" component={Login} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// // export default App;


// // You can import Ionicons from @expo/vector-icons if you use Expo or
// // react-native-vector-icons/Ionicons otherwise.




// // import * as React from 'react';
// // import { Text, View } from 'react-native';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';

// // import Home from './scr/screens/Home';
// // import ProductList from './scr/screens/ProductList';
// // import Detail from './scr/screens/Detail';
// // import Me from './scr/screens/Me';
// // import Cart from './scr/screens/Cart';
// // import WistList from './scr/screens/WistList';



// // const Stack = createStackNavigator();
// // const Tab = createBottomTabNavigator();


// // const stackHome = ()=> {
// //   return (
// //     <Stack.Navigator initialRouteName="Home">
// //       <Stack.Screen name="Home" component={Home} />
// //       <Stack.Screen name="ProductList" component={ProductList} />
// //       <Stack.Screen name="Detail" component={Detail} />
// //       {/* <Stack.Screen name="Me" component={Me} />
// //       <Stack.Screen name="WistList" component={WistList} />
// //       <Stack.Screen name="Cart" component={Cart} /> */}
// //     </Stack.Navigator>
// //   )
// // }


// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Tab.Navigator
// //         screenOptions={({ route }) => ({
// //           tabBarIcon: ({ focused, color, size }) => {
// //             let iconName;

// //             if (route.name === 'Home') {
// //               iconName = focused ? 'home-outline' : 'ios-home';
// //             } else if (route.name === 'Settings') {
// //               iconName = focused ? 'ios-list-box' : 'ios-list';
// //             }

// //             // You can return any component that you like here!
// //             return <Ionicons name={iconName} size={size} color={color} />;
// //           },
// //         })}
// //         tabBarOptions={{
// //           activeTintColor: 'tomato',
// //           inactiveTintColor: 'gray',
// //         }}
// //       >
// //         <Tab.Screen name="Home" component={stackHome} />
// //         <Tab.Screen name="WistList" component={WistList} />
// //         <Tab.Screen name="Cart" component={Cart} />
// //         <Tab.Screen name="Me" component={Me} />
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // }





// // import * as React from 'react';
// // import { Text, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// import Home from './HomeScreen'
// import ProductList from './src/screens/ProductList'
// import Detail from './src/screens/Detail'
// import WistList from './Products'
// import Cart from './src/screens/Cart'
// import Me from './Utilities'
// import Vouchers from './Vouchers'
// import Endow from './Endow'
// import Coupons from './Coupons'
// import axios from 'axios'



// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const TabTop = createMaterialTopTabNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home"
//     screenOptions={{
//       headerShown: false
//     }}>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Product" component={ProductList} />
//       <Stack.Screen name="Detail" component={Detail} />
//     </Stack.Navigator>
//   )
// }

// function vouchers() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>TÍCH ĐIỂM</Text>
//     </View>
//   );
// }

// function endow() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>ĐỔI ƯU ĐÃI</Text>
//     </View>
//   );
// }

// function coupons() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>PHIẾU ƯU ĐÃI</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
      
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             if (route.name === 'HomeStack') {
//               iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
//             } else if (route.name === 'WishList') {
//               iconName = focused ? 'alarm-sharp' : 'alarm-outline';
//             } else if (route.name === 'Cart') {
//               iconName = focused ? 'airplane-sharp' : 'airplane-outline';
//             } else if (route.name === 'Khác') {
//               iconName = focused ? 'airplane-sharp' : 'airplane-outline';
//             }
//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'tomato',
//           inactiveTintColor: 'gray',
//         }}
//       >
//         <Tab.Screen name="HomeStack" component={HomeStack} />
//         <Tab.Screen name="WistList" component={WistList} />
//         <Tab.Screen name="Cart" component={Cart} />
//         <Tab.Screen name="Khác" component={Me} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }



import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Home from './HomeScreenNotLogin'
import Detail from './src/screens/Detail'
import Product from './Products'
import Me from './Utilities'
import Login from './Login';
import Combo from './Combo'
import Address from './Address'
import demoProduct from './demoProduct'
import MenuModal from './MenuModal'
import axios from 'axios'



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <View style={{
      justifyContent:'space-between',
      flexDirection:'row',
      marginBottom:20,
      marginTop:50,
      }}>
        <View>
          <Image
            style={{ width: 200,height: 25,marginLeft:-20}}
            source={require('./img/thecoffeehouse.png')}
          />
        </View>

        <View>
          <Image
              style={{width: 30,height: 25,}}
              source={require('./img/Cart.png')}
                  
          />
        </View>
      </View>
  );
}



const HomeStack = () => {
  return (
    <Stack.Navigator> 
    

      <Stack.Screen name="Home" component={Home} 
      options={{
        headerTitle: props => <LogoTitle {...props} />
        
      }}/> 
      
      
      
          <Tab.Screen name="Login" component={Login} options={{ headerShown:false  }} tabBar={() => null} />

        <Tab.Screen name="Products" component={Product} />
      
    </Stack.Navigator>
  )
}

const ME = () => {
  return (
    <Stack.Navigator>     
      <Stack.Screen name="Me" component={Me} 
      options={{
        headerTitle: props => <LogoTitle {...props} />
        
      }}/> 
    </Stack.Navigator>
  )
}

const ComBo = () => {
  return (
    <Stack.Navigator>    
      <Stack.Screen name="Combo" component={Combo} 
      options={{
        headerTitle: props => <LogoTitle {...props} />
      }}/>      
    </Stack.Navigator>
  )
}

const AddRess = () => {
  return (
    <Stack.Navigator>    
      <Stack.Screen name="Address" component={Address} 
      options={{
        headerTitle: props => <LogoTitle {...props} />
      }}/>      
    </Stack.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#d99d17',
          inactiveTintColor: '#c3c3c3',
          labelStyle:{
            fontSize:10,  
          }
        }}>
        <Tab.Screen name="Trang chủ" component={HomeStack} 
          options={{
            tabBarIcon:({color}) =>(
              <Feather name="home" size={20} color={color} />
            )
          }}/>

         
        
        

        <Tab.Screen name="Đặt món" component={Product} 
          options={{
            
            tabBarIcon:({color}) =>(
              <SimpleLineIcons name="cup" size={20} color={color} />
            ),
            
          }}
        />

        <Tab.Screen name="Cửa hàng" component={AddRess} 
          options={{
            tabBarIcon:({color}) =>(
              <MaterialIcons name="storefront" size={20} color={color} />
            )
          }}
        />

        <Tab.Screen name="Tích điểm" component={ComBo} 
          options={{
            
            tabBarIcon:({color}) =>(
              <MaterialIcons name="event-note" size={20} color={color} />
            )
          }}
        />

        <Tab.Screen name="Khác" component={ME} 
          options={{
            tabBarIcon:({color}) =>(
              <FontAwesome name="bars" size={20} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}