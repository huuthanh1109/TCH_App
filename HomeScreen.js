import React from 'react'
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity, FlatList,ScrollView } from 'react-native'
// import { FlatList } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { LinearGradient } from 'expo';
// import LinearGradient from 'react-native-linear-gradient'


const DATA = [
    {
      id: 1,
      photo: require('./img/Coffee-House-Slider1.jpg'),
      
    },
    {
      id: 2,
      photo: require('./img/Coffee-House-Slider2.jpg'),
      
    },
    {
      id: 3,
      photo: require('./img/Coffee-House-slider3.jpg'),
      
    },
    
  ]

  const renderItemCol4 = ({ item }) => (
    <View style={{ width: 382, }}>
      <Image
        style={styles.imgStyleCol4}
        source={ item.photo }
      />
    </View>
  );

export default function HomeScreen() {
    return (
        <View style={styles.container} >
          {/* <LinearGradient 
          colors={['red', 'yellow', 'green' ]}
          style={styles.linearGradient}

          > */}
          <View style={styles.wap}>
          <View style={styles.headerHome}>
            <View>
            <Image
                style={styles.logoImg}
                source={require('./img/thecoffeehouse.png')}
              
              />
            </View>
            <View>

            <Image
                style={styles.logoCart}
                source={require('./img/Cart.png')}
              
              />
            </View>
          </View>

            <View style={styles.wapBody}>
                <View style={styles.slider}>
                  <FlatList
                      data={DATA}
                      // numColumns={2}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      renderItem={renderItemCol4}
                      keyExtractor={item => item.id}
                      // columnWrapperStyle={{ justifyContent:'space-around',marginBottom:16 }}
                      // style={{paddingLeft:10,paddingRight:10 }}
                  />
                </View>

                <View style={styles.deliveryMethod}>
                  <View style={styles.delivery}>
                    <View style={styles.wapIcon}>

                      <Fontisto name="motorcycle" color="#78cae2" size={20} style={styles.icon} />
                    </View>
                    <Text style={styles.deliveryText}>Giao tận nơi</Text>
                  </View>
                  
                  <View style={styles.comeGet}>
                    <View style={styles.wapIconCup}>
                      <FontAwesome name="coffee" color="#f8918e" size={20} style={styles.icon} />

                    </View>
                    <Text style={styles.deliveryText}>Tự đến lấy</Text>
                  </View>
                </View>

                <View style={styles.banner}>
                  <Image
                  style={styles.bannerImg}
                  source={require('./img/bannerHome.jpg')}
                />
                </View>
                <View>

                </View>
            </View>
            </View>
            {/* </LinearGradient> */}
        </View>
    )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#eee',
    // alignItems: 'center',
    justifyContent: 'center',

    
    
  },
  linearGradient:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  wap:{
    marginLeft:15,
    marginRight:15,
    
  },
  headerHome:{
    justifyContent:'space-between',
    flexDirection:'row',
    // backgroundColor:'red',
    marginBottom:25,
    marginTop:25,
    
    
  },
  logoImg:{
    // margin:5,
    // zIndex:1
    width: 200,
    height: 25,
    marginLeft:-20
  },
  logoCart:{
    width: 30,
    height: 25,
  },
  wapBody:{
    // width:'100%',
    // height:215
    // marginBottom:20,
    marginTop:10,
  },
  slider:{
    width:'100%',
    // height:215
  },
  imgStyleCol4:{
    width:384,
    height:200,
    borderRadius:10
  },
  deliveryMethod:{
    justifyContent:'space-between',
    flexDirection:'row',
    marginBottom:10,
    marginTop:10,
  },
  wapIcon:{
    width:30,
    height:30,
    backgroundColor:'#d4eef6',
    justifyContent:'center',
    borderRadius:20,
    marginBottom:10
  },
  wapIconCup:{
    width:30,
    height:30,
    backgroundColor:'#fde2e5',
    justifyContent:'center',
    borderRadius:20,
    marginBottom:10
  },
  delivery:{
    flex:1,
    
    backgroundColor:'#fff',
    borderRadius:10,
    paddingBottom:20,
    paddingTop:20,
    paddingLeft:15,
    marginRight:4
  },
  comeGet:{
    flex:1,
    backgroundColor:'#fff',
    borderRadius:10,
    paddingBottom:20,
    paddingTop:20,
    paddingLeft:15,
    marginLeft:4
  },
  
  icon:{
    alignSelf:'center',
    
  },
  deliveryText:{
    fontSize:16,
    fontWeight:'bold'
  },
  
 
  banner:{},
  bannerImg:{
    width:'100%',
    height:185,
    borderRadius:10
  },
});