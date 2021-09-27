import React,{useState, useEffect} from 'react'
import {StyleSheet, View, Text,TextInput, FlatList, Image, ScrollView, ActivityIndicator  } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getAddress} from './src/services/Api'
import { render } from 'react-dom';


var img = require('./img/vc-none.png')

const renderItem = ({ item }) => (
    <View style={{ width: '100%', flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff',
    padding:15,marginBottom:4, borderRadius:14}}>
     
      <View>
        <Image
        style={styles.imgAddress}
        // source={ item.photo }
        source={ {uri: (item.images[0]) || img} }

      />
      </View>
      <View style={{marginLeft:15}}>
          <Text style={styles.TCH_Text}>THE COFFEE HOUSE</Text>
          <Text style={styles.address} numberOfLines={2} ellipsizeMode="tail">
              {item.address.street}, {item.address.district}, {item.address.state}, {item.address.country}</Text>
          <Text style={styles.range}>Cách đây  km</Text>
      </View>
      
    </View>
  );

export default function Address() {


    const [address, setAddress] = useState()
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
      
    //   const axios = require('axios');
    // setIsLoading(false)
    const getApiAddress = async () =>{
        const rs = await getAddress()
        console.log('rs', rs)
        setAddress(rs.data)
        setIsLoading(!isLoading)
        
    }
      getApiAddress()
      
    
    }, [])

   

    

        if (isLoading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator size='large'color='#c4671a'  animating />
                </View>
            )
        } else {
           return (
            <View style={styles.container}>
                <View style={[styles.wapHeader, styles.wap]}>
                    <View style={styles.wapSearch}>
                        <Ionicons name="search" color="#888" size={20} style={styles.icon} />
                        <TextInput
                            placeholder="Tìm kiếm"
                            // autoCapitalize="none"
                            style={styles.input}           
                        />   
                    </View>
                    <View style={styles.map}>
                        <FontAwesome5 name="map-marked-alt" color="#888" size={20} style={styles.icon} />
                        <Text style={[styles.text,{alignSelf:'center'}]}>BẢN ĐỒ</Text>
                    </View>
                </View>
    
                <ScrollView style={[ styles.body]}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={[styles.wap, {borderRadius:14, backgroundColor:'#f4f4f4', height:40}]}>
                        <Text style={[styles.text, { backgroundColor:'#e4e4e4', padding:15, borderRadius:14 }]}>CÁC CỬA HÀNG KHÁC</Text>
                    </View>
    
                    <View>
                        <FlatList
                              data={address}
                              numColumns={1}
                              renderItem={renderItem}
                              keyExtractor={item => item.id}
                              
                              showsHorizontalScrollIndicator={false}
                                style={[styles.wap, {marginTop:20}]}
                                refreshing={!isLoading}
                        />
                    </View>
                </ScrollView>
                
            </View>
        ) 
        }
    }

    


const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      justifyContent: 'center',
      
    },
    body:{
        backgroundColor:'#f4f4f4',
        paddingTop:20,
    },
    wap:{
        marginLeft:15,
        marginRight:15,
    },
    
    wapHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        marginTop:10,
        marginBottom:10
        
        
    },
    wapSearch:{
        flexDirection:'row',
        backgroundColor:'#e1e1e1',
        borderRadius:10,
        width:'70%',
    },
    map:{
        flexDirection:'row',
        alignSelf:'center'

    },
    input:{
        paddingLeft:8, 
        height:45,
        fontSize:17,
        borderRadius:14,
        width:'80%',
         
    },
    text:{
        fontSize:12, 
        fontWeight:'bold',
        // alignSelf:'center', 
        color:'#666'
    },

    icon:{
        alignSelf:'center',
        marginRight:10,
        marginLeft:10
    },

    imgAddress:{
        width:90,
        height:90,
        borderRadius:4,
    },
    TCH_Text:{
        fontWeight:'bold',
        fontSize:11,
        color:'gray',
        marginBottom:4
    },
    address:{
        fontSize:17,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: {width: -1, height: 1},
        color:'#111',
        width:'55%',
        marginBottom:4,
        // paddingRight:15

    },
    range:{
        fontSize:16,
        color:'gray'

    },

})