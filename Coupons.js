/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, Pressable, FlatList, ScrollView } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import ModalVoucher from './ModalVoucher'

// import LinearGradient from 'react-native-linear-gradient'


const DATA = [
    {
      id: 1,
      photo: require("./img/vc-50.png"),
      heading:'Giảm 50% 1 bánh cho đơn hàng 1 ly size lớn nhất',
      date:'30/04/2021'
    },
    {
      id: 2,
      photo: require("./img/vc-15.png"),
      heading:'Ưu đãi 15% đơn hàng từ 2 món',
      date:'30/04/2021'
    },
    {
      id: 3,
      photo: require("./img/vc-11.png"),
      heading:'Mua 1 trà sữa tặng 1 trà sữa hoặc bánh Mochi',
      date:'30/04/2021'
    },
    {
      id: 4,
      photo: require("./img/vc-35.png"),
      heading:'Ưu đãi 35% đơn hàng 5 món',
      date:'30/04/2021'
    },
    {
      id: 5,
      photo: require("./img/vc-none.png"),
      heading:'Miễn phí Upsize_KH Mới',
      date:'03/05/2021'
    },
    {
      id: 6,
      photo: require("./img/vc-none.png"),
      heading:'Miễn phí 01 Snack với hóa đơn trên 100k_KH Đồng',
      date:'16/05/2021'
    },
   
  ]

  


export default function Coupons({navigator}) {
  const renderItem = ({ item }) => (
        <View style={{ width: '100%', flexDirection:'row', backgroundColor:'#fff' ,borderRadius:10,marginBottom:10 ,shadowColor: "#333",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 5
        }}>
          
           <Image
            style={styles.imgVouchers}
            source={item.photo}
          /> 
          <View style={{width:2, height:'100%', backgroundColor:'#fff', borderStyle:'dotted', borderLeftWidth:6, borderLeftColor:'#f4f4f4',}}>
              
          </View>
          <View style={styles.textVouchers}>
            <Text style={styles.textHeading}>{item.heading}</Text>
            <Text style={styles.textDate}>Hết hạn {item.date}</Text>
            
          </View>
          
        </View>
      );

  

  return (
    <View style={styles.container}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={styles.wap}>
            <Pressable
              style={[styles.button,styles.range]}
              onPress={() => navigator.navigate('ModalVoucher')}
            >
              <View style={styles.wapInput}>
                  <View style={styles.input}>
                    <Image
                      style={styles.iconImg}
                      source={require("./img/icon-voucher.png")}
                    /> 
                    <Text style={styles.textInput}>Nhập mã khuyến mại</Text>
                  </View>
                  <FontAwesome5 name="angle-right" color="#ccc" size={18} style={styles.icon} />
                </View>
            </Pressable>


            <View style={[styles.utilities,styles.general,styles.range]}>
                          
            </View>

            <View style={[styles.vouchers,styles.general]}>
              <View style={[styles.vouchersHeading,styles.range]}>
                  <Text  style={styles.vouchersText}>Phiếu ưu đãi của bạn</Text>
                  
                  <TouchableOpacity style={{backgroundColor: "#fff",
                          width:100,
                          // paddingHorizontal: 1,
                          paddingVertical: 8,
                          borderRadius: 16,
                          alignItems:'center'}}
                  // onPress={() => {}} 
                  >
                    <Text style={{fontSize: 12,color: "#d8a874",fontWeight:'bold'}}>Xem Tất Cả</Text>
                  </TouchableOpacity>
              </View>

              <View style={[styles.listVouchers,styles.range]}>
                <FlatList
                        
                        data={DATA}
                        // horizontal={true}
                        numColumns={1}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        // columnWrapperStyle={{ justifyContent:'space-around',marginBottom:10 }}
                    style={{marginBottom:20,marginTop:20 }}
                  />
              </View>

              

            </View>



      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f4f4f4',
    // alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red'
    
  },
  wap:{
    

  },
  range:{
    marginLeft:14,
    marginRight:14

  },
  general:{
    marginTop:15
  },
  
  
  listVouchers:{
    
  },
  vouchers:{
    
  },
  vouchersHeading:{
    justifyContent:'space-between',
    flexDirection:'row',
    paddingLeft:8,
    paddingRight:8,
    marginTop:20,

    
  },
  vouchersText:{
    fontSize:20,
    fontWeight:'bold'
  },
  

  imgVouchers:{
    width:80,
    height:80,
    // borderRadius:10,
    margin:20,
  },
  
  textVouchers:{
    alignSelf:'center',
    margin:20,
    // width:235,
    width:'55%',
    // height:80,
  },
  textHeading:{
    // fontWeight:'bold',
    color:'#222',
    fontSize:16,
    marginBottom:15,
    
  },
  textDate:{
    color:'#222',
    fontSize:16,
  },

  
  button:{
    backgroundColor:'#fff',

    // height:45,
    marginTop:20,
    borderRadius:10,
    borderBottomColor:'#e1e1e1',
    borderBottomWidth:2,
    // paddingBottom:20,
    padding:10
    
  },
  wapInput:{
    flexDirection:'row',
    justifyContent:'space-between',
    
  },
  input:{
    flexDirection:'row',
  },
  iconImg:{
   
    width:28,
    height:20,
    alignSelf:'center'
    
  },
  textInput:{
    fontSize:18,
    marginLeft:15,
    alignSelf:'center',
  },
  icon:{
    alignSelf:'center',
    marginRight:12,
  },
    
});
