import React from 'react'
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity, FlatList, ScrollView } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


// import LinearGradient from 'react-native-linear-gradient'


const DATA = [
    {
      id: 1,
      photo: require("./img/vc-50.png"),
      heading:'Giảm 50% 1 bánh cho đơn hàng 1 ly size lớn nhất',
      date:'Hết hạn 30/04/2021'
    },
    {
      id: 2,
      photo: require("./img/vc-15.png"),
      heading:'Ưu đãi 15% đơn hàng từ 2 món',
      date:'Hết hạn 30/04/2021'
    },
    {
      id: 3,
      photo: require("./img/vc-11.png"),
      heading:'Mua 1 trà sữa tặng 1 trà sữa hoặc bánh Mochi',
      date:'Hết hạn 30/04/2021'
    },
   
  ]

  const DATA1 = [
    {
      id: 1,
      photo: require("./img/ud-50.png"),
      heading:'Ưu đãi 50% dịch vụ tổng quát tại Nha Khoa Kim',
      amount:'99'
    },
    {
      id: 2,
      photo: require("./img/ud-25.png"),
      heading:'Ưu đãi 25% dịch vụ thẩm mỹ tại Nha Khoa Kim',
      amount:'99'
    },
    {
      id: 3,
      photo: require("./img/ud-combo.png"),
      heading:'Tặng Combo 2 khẩu trang tại Coolmate',
      amount:'99'
    },
    {
      id: 4,
      photo: require("./img/ud-upsize.png"),
      heading:'Miễn phí upsize',
      amount:'199'
    },
    {
      id: 5,
      photo: require("./img/ud-50k.png"),
      heading:'Voucher 50,000đ tại Đảo Hải Sản',
      amount:'299'
    },
  ]


export default function Vouchers() {

  const renderItem = ({ item }) => (
        <View style={{ width: '100%', flexDirection:'row', backgroundColor:'#fff' ,borderRadius:10,marginBottom:10 ,shadowColor: "#333",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.05,
        shadowRadius: 14,
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
            <Text style={styles.textDate}>{item.date}</Text>
            
          </View>
          
        </View>
      );

  const renderItem1 = ({ item }) => (
        <View style={{ width: '100%', flexDirection:'row', backgroundColor:'#fff',marginBottom:2,justifyContent:'space-evenly'
         }}>
          
           <Image
            style={styles.imgAmount}
            source={item.photo}
            /> 
            <Text style={styles.textHeadingAmount}>{item.heading}</Text>
            <View style={styles.amount}>
              <View style={styles.wapAmount}>
                <Text style={styles.textAmount}>{item.amount}</Text>

              </View>
              <Text style={styles.bean}>BEAN</Text>
            </View>
            
         
          
        </View>
      );

  return (
    <View style={styles.container}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={styles.wap}>

      
      <View style={[styles.imgCart,styles.general]}>
        <Image
            style={styles.imgStyle}
            source={require('./img/cart-tich-diem.png')}
          /> 
      </View>

      <View style={[styles.utilities,styles.general,styles.range]}>
                      <View style={[styles.history]}>
                        <View style={styles.wapIconHistory}>
  
                          <FontAwesome5 name="user-alt" color="#7dc9df" size={16} style={styles.icon} />
                        </View>
                        <Text style={styles.utilitiesText}>Đổi ưu đãi</Text>
                      </View>
                      
                      <View style={styles.rules}>
                        <View style={styles.wapIconrules}>
                          <FontAwesome5 name="credit-card" color="#c76516" size={16} style={styles.icon} />
  
                        </View>
                        <Text style={styles.utilitiesText}>Voucher của bạn</Text>
                      </View>
                      
                      <View style={styles.music}>
                        <View style={styles.wapIconMusic}>
                          <FontAwesome5 name="user-alt" color="#53a831" size={16} style={styles.icon} />
  
                        </View>
                        <Text style={styles.utilitiesText}>Lịch sử BEAN</Text>
                      </View>
                      
                      <View style={styles.news}>
                        <View style={styles.wapIconNews}>
                          <FontAwesome5 name="credit-card" color="#5592a7" size={16} style={styles.icon} />
  
                        </View>
                        <Text style={styles.utilitiesText}>Quyền lợi của bạn</Text>
                      </View>
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

              <View style={[styles.vouchersHeading,styles.range]}>
                  <Text  style={styles.vouchersText}>Đổi ưu đãi</Text>
                  
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

              <View style={styles.listEndow}>
                <FlatList
                        
                        data={DATA1}
                        // horizontal={true}
                        numColumns={1}
                        renderItem={renderItem1}
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
  
  imgCart:{
    width:'100%',
    height:350,
    borderRadius:16,
    

    // shadowColor: "#333",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 14,
    // elevation: 5,
    backgroundColor:'#f4f4f4',
    alignItems:'center',
    justifyContent:'center'
  },
  imgStyle:{
    width:'95%',
    height:350,
    borderRadius:16,
    
    
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
    marginBottom:10,

    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.15,
    shadowRadius: 14,
    elevation: 5
  },
  
  wapIconHistory:{
    width:30,
    height:30,
    borderRadius:20,
    backgroundColor:'#d6eef6',
    justifyContent:'center',
    
    

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
    marginBottom:10,

    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.15,
    shadowRadius: 14,
    elevation: 5

  },
  wapIconrules:{
    width:30,
    height:30,
    borderRadius:20,
    backgroundColor:'#fdf2dc',
    justifyContent:'center'

  },
  music:{
    width:'48%',
    borderRadius:10,
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:12,
    backgroundColor:'#fff',

    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.15,
    shadowRadius: 14,
    elevation: 5
    
  },
  wapIconMusic:{
    width:30,
    height:30,
    borderRadius:20,
    backgroundColor:'#dceed7',
    justifyContent:'center'

  },
  news:{
    width:'48%',
    borderRadius:10,
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:12,
    backgroundColor:'#fff',


    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.15,
    shadowRadius: 14,
    elevation: 5
  },
  wapIconNews:{
    width:30,
    height:30,
    borderRadius:20,
    backgroundColor:'#d6eff7',
    justifyContent:'center'

  },
  icon:{
    alignSelf:'center'
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
    width:235,
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
  listEndow:{
    width:'100%',
    // marginLeft:14,
    // marginRight:14,
    
    
  },

  imgAmount:{
    width:70, 
    height:70,
    
  },
  textHeadingAmount:{
    alignSelf:'center',
    width:230,
    fontSize:16,
  },
  amount:{
    
    alignSelf:'center'
  },

  wapAmount:{
    
    backgroundColor:'#ddefd7',
    width:60,
    height:25,
    borderRadius:14,
    alignSelf:'center',
    
  },
  textAmount:{
    fontSize:14,
    fontWeight:'bold',
    color:'#6eb95a',
    textAlign:'center',
    alignSelf:'center',
  },
  bean:{
    alignSelf:'center',
    fontSize:14,
    
  },

    
});
