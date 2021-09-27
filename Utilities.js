import React from 'react'
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity, ScrollView } from 'react-native'
// import { FlatList } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
// import { LinearGradient } from 'expo';
// import LinearGradient from 'react-native-linear-gradient'


export default function Utilities() {
  return (
    <View style={styles.container}>
     
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={styles.wap}>
        <View style={styles.general}>
          <Text style={styles.textHeading}>Tiện ích</Text>

          <View style={styles.utilities}>
                    <View style={styles.history}>
                      <View style={styles.wapIconHistory}>

                        <Foundation name="clipboard-notes" color="#c46115" size={20} style={styles.icon} />
                      </View>
                      <Text style={styles.utilitiesText}>Lịch sử đơn hàng</Text>
                    </View>
                    
                    <View style={styles.rules}>
                      <View style={styles.wapIconrules}>
                        <FontAwesome5 name="radiation-alt" color="#c46115" size={18} style={styles.icon} />

                      </View>
                      <Text style={styles.utilitiesText}>Điều khoản</Text>
                    </View>
                    
                    <View style={styles.music}>
                      <View style={styles.wapIconMusic}>
                        <Ionicons name="musical-note" color="#f78582" size={22} style={styles.icon} />

                      </View>
                      <Text style={styles.utilitiesText}>Nhạc đang phát</Text>
                    </View>
                    
                    <View style={styles.news}>
                      <View style={styles.wapIconNews}>
                        <Entypo name="news" color="#95cedf" size={18} style={styles.icon} />

                      </View>
                      <Text style={styles.utilitiesText}>Tin tức & Khuyến mãi</Text>
                    </View>
            </View>
          </View>


            <View style={[styles.general]}>
              <View style={[styles.vouchersHeading,styles.range]}>
                  <Text  style={styles.textHeading}>Hỗ trợ</Text>
              </View>

              <View style={[{backgroundColor:'#fff'},styles.borderGeneal]}>

                <View style={styles.wapTypes}>
                  <View style={styles.types}>
                    <Ionicons name="star" color="#7f6f5e" size={20} style={styles.icon} />
                    <Text style={styles.text}>Gửi đánh giá và góp ý</Text>
                  </View>
                  <FontAwesome5 name="angle-right" color="#ccc" size={18} style={[styles.icon,{paddingRight:10,}]} />
                </View>

                <View style={styles.wapTypes}>
                  <View style={styles.types}>
                    <MaterialCommunityIcons name="message-bulleted" color="#7f6f5e" size={20} style={[styles.icon,{paddingRight:10,}]} />
                    <Text style={styles.text}>Gửi đánh giá và góp ý</Text>
                  </View>
                  <FontAwesome5 name="angle-right" color="#ccc" size={18} style={[styles.icon,{paddingRight:10,}]} />
                </View>
              </View>
            </View>
          
          <View style={[styles.general]}>
              <View style={[styles.vouchersHeading,styles.range]}>
                  <Text  style={styles.textHeading}>Tài khoản</Text>
              </View>

              <View style={[{backgroundColor:'#fff'},styles.borderGeneal]}>

                <View style={styles.wapTypes}>
                  <View style={styles.types}>
                  <FontAwesome name="user" color="#7f6f5e" size={20} style={[styles.icon,{paddingRight:10,}]} />

                    <Text style={styles.text}>Thông tin cá nhân</Text>
                  </View>
                  <FontAwesome5 name="angle-right" color="#ccc" size={18} style={[styles.icon,{paddingRight:10,}]} />
                </View>

                <View style={styles.wapTypes}>
                  <View style={styles.types}>
                  <FontAwesome5 name="bookmark" color="#7f6f5e" size={18} style={[styles.icon,{paddingRight:10,}]} />

                    <Text style={styles.text}>Địa chỉ đã lưu</Text>
                  </View>
                  <FontAwesome5 name="angle-right" color="#ccc" size={18} style={[styles.icon,{paddingRight:10,}]} />
                </View>

                <View style={styles.wapTypes}>
                  <View style={styles.types}>
                  <Ionicons name="settings" color="#7f6f5e" size={18} style={[styles.icon,{paddingRight:10,}]} />

                    <Text style={styles.text}>Cài đặt</Text>
                  </View>
                  <FontAwesome5 name="angle-right" color="#ccc" size={18} style={[styles.icon,{paddingRight:10,}]} />
                </View>

                <View style={styles.wapTypes}>
                  <View style={styles.types}>
                  <Ionicons name="log-out" color="#7f6f5e" size={20} style={[styles.icon,{paddingRight:10,}]} />

                    <Text style={styles.text}>Đăng xuất</Text>
                  </View>
                  <FontAwesome5 name="angle-right" color="#ccc" size={18} style={[styles.icon,{paddingRight:10,}]} />
                </View>

              </View>
            </View>
      </ScrollView>
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
 
  wap:{
    // paddingTop:30,
    // paddingBottom:30,
    marginLeft:15,
    marginRight:15,
  },
  general:{
    marginBottom:25
  },
  borderGeneal:{
    borderRadius:10
  },
  range:{
    marginLeft:14,
    marginRight:14

  },
  textHeading:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:20,
    marginTop:10
  },
  utilities:{
    justifyContent:'space-around',
    flexDirection:'row',
    flexWrap:'wrap',
    
  },
  history:{
    width:'48%',
    borderRadius:10,
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:12,
    backgroundColor:'#fff',
    marginBottom:10
  },
  
  wapIconHistory:{
    width:30,
    height:30,
    borderRadius:20,
    backgroundColor:'#f8f3dc',
    justifyContent:'center',
    // alignSelf:'center'
    
    

  },
  utilitiesText:{
    fontSize:17,
    color:'#333',
    marginTop:10
  },
  rules:{
    width:'48%',
    borderRadius:10,
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:12,
    backgroundColor:'#fff',
    marginBottom:10

  },
  wapIconrules:{
    width:30,
    height:30,
    borderRadius:20,
    backgroundColor:'#f8f3dc',
    justifyContent:'center'

  },
  music:{
    width:'48%',
    borderRadius:10,
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:12,
    backgroundColor:'#fff',
    
  },
  wapIconMusic:{
    width:30,
    height:30,
    borderRadius:20,
    backgroundColor:'#fddfe2',
    justifyContent:'center'

  },
  news:{
    width:'48%',
    borderRadius:10,
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:12,
    backgroundColor:'#fff',
  },
  wapIconNews:{
    width:30,
    height:30,
    borderRadius:20,
    backgroundColor:'#d5effa',
    justifyContent:'center'

  },
  icon:{
    alignSelf:'center',
    
  },


  wapTypes:{
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-between',
    height:60,
    marginLeft:15,
    borderBottomWidth:2,
    borderBottomColor:'#f4f4f4',
  },
  types:{
    flexDirection:'row',
    
  },
  text:{
    marginLeft:10,
    alignSelf:'center',
    color:'#333',
    fontSize:16,
    

  },
});