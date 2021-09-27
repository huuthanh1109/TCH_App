import * as React from 'react';
import {  View, Text, Image } from 'react-native';
import {  Header, Left, Right,Body, Title} from 'native-base';
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
import searchProduct from './searchProduct'
import axios from 'axios'



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    // <View style={{
    //   width:'100%',
    //   flexDirection:'row',
    //   // justifyContent:'space-between',
    //   // marginBottom:20,
    //   // marginTop:50,
    //   // backgroundColor:'red',
    //   }}>    
    //       <Image
    //         style={{ width: 200,height: 25,marginLeft:-20}}
    //         source={require('./img/thecoffeehouse.png')}
    //       />

    //       <Image
    //           style={{width: 30,height: 25,}}
    //           source={require('./img/Cart.png')}
                  
    //       />
        
    //   </View>


      <Header style={{flex:1}}>
        <Left>
        <Image
            style={{ width: 200,height: 25}}
            source={require('./img/thecoffeehouse.png')}
          />
        </Left>
      <Body>
        <Title></Title>
      </Body>
        <Right>
          <Image
              style={{width: 30,height: 25,}}
              source={require('./img/Cart.png')}
                  
          />
        </Right>
      </Header>
  );
}



const HomeStack = () => {
  return (
    <Stack.Navigator> 
    

      <Stack.Screen name="demoProduct" component={Home} 
      options={{
        // headerTitle:  <LogoTitle  />
        // header: <LogoTitle/>
      
        
        
      }}/> 
     
              <Stack.Screen name="Login" component={Login} options={{ headerShown:false  }}/>
              {/* <Stack.Screen name="Products" component={Product} options={{ headerShown:false  }}/> */}
      
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