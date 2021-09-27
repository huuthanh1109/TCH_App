import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import LinearGradient from 'react-native-linear-gradient'

const DATA = [
  {
    id: 1,
    photo: require('./img/hot-50.png'),
    sponsor: 'Nha Khoa Kim',
    heading: 'Ưu đãi 50% dịch vụ tổng quát tại Nha Khoa Kim',
    amount: '99',
  },
  {
    id: 2,
    photo: require('./img/hot-25.png'),
    sponsor: 'Nha Khoa Kim',
    heading: 'Ưu đãi 25% dịch vụ thẩm mỹ tại Nha Khoa Kim',
    amount: '99',
  },
  {
    id: 3,
    photo: require('./img/hot-100k.png'),
    sponsor: 'Mykingdom',
    heading: 'Voucher 100,000đ tại Mykingdom',
    amount: '2300',
  },
];

const DATA1 = [
  {
    id: 1,
    photo: require('./img/ca-phe-viet-nam.png'),

    text: 'Miễn phí 01 Cà phê Việt Nam size M',
    amount: '795',
  },
  {
    id: 2,
    photo: require('./img/tra-sua-macca.png'),
    text: 'Miễn phí 01 Trà sữa Mắc ca/Macchiato size M',
    amount: '1200',
  },
  {
    id: 3,
    photo: require('./img/mua-1-tang-1.png'),
    text: 'Ưu đãi mua 1 Nước size L tặng 1 Nước hoa quả',
    amount: '450',
  },
  {
    id: 4,
    photo: require('./img/ca-phe-viet-nam.png'),
    text: 'Miễn phí 01 Cà phê máy/Cold Brew size M',
    amount: '1250',
  },

  ];

const DATA3 = [
  {
    id: 1,
    photo: require('./img/ud-50.png'),
    sponsor: 'Nha Khoa Kim',
    heading: 'Ưu đãi 50% dịch vụ tổng quát tại Nha Khoa Kim',
    amount: '99',
  },
  {
    id: 2,
    photo: require('./img/ud-25.png'),
    sponsor: 'Nha Khoa Kim',
    heading: 'Ưu đãi 25% dịch vụ thẩm mỹ tại Nha Khoa Kim',
    amount: '99',
  },
  {
    id: 3,
    photo: require('./img/ud-50k.png'),
    sponsor: 'Đảo Hải Sản',
    heading: 'Voucher 50,000đ tại Đảo Hải Sản',
    amount: '299',
  },
  {
    id: 4,
    photo: require('./img/ud-combo.png'),
    sponsor: 'Coolmate',
    heading: 'Tặng Combo 2 khẩu trang tại Coolmate',
    amount: '99',
  },
  {
    id: 5,
    photo: require('./img/ud-100k.png'),
    sponsor: 'Đảo Hải Sản',
    heading: 'Voucher 100,000đ tại Đảo Hải Sản',
    amount: '399',
  },
  {
    id: 6,
    photo: require('./img/ud-100kd.png'),
    sponsor: 'VinID',
    heading: 'Phiếu mua hàng 100,000đ tại ứng dụng VinID',
    amount: '2500',
  },
  {
    id: 7,
    photo: require('./img/ud-100kd1.png'),
    sponsor: 'Ashima',
    heading: 'Voucher ăn uống 100,000đ tại Ashima',
    amount: '2500',
  },
  {
    id: 8,
    photo: require('./img/ud-200kv.png'),
    sponsor: 'Thế giới di động',
    heading: 'Voucher mua sắm 200,000đ tại Thế giới di động',
    amount: '4600',
  },
  {
    id: 9,
    photo: require('./img/ud-200k.png'),
    sponsor: 'Annam Gourmet',
    heading: 'Voucher 200,000đ tại Annam Gourmet',
    amount: '99',
  },
];

export default function Endow() {
  const renderItem = ({item}) => (
    <View
      style={{
        width: 350,
        backgroundColor: '#fff',
        marginBottom: 2,
        borderRadius: 14,
        marginRight: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 2,

      <Image style={styles.imgAmount} source={item.photo} />
      <View style={styles.amount}>
        <View>
          <Text style={styles.textSponsor}>{item.sponsor}</Text>
          <Text style={styles.textHeadingAmount}>{item.heading}</Text>
        </View>
        <View style={styles.wapAmount}>
          <Text style={styles.textAmount}>{item.amount}</Text>
          <Text style={styles.bean}>BEAN</Text>
        </View>
      </View>
    </View>
  );

  const renderItem1 = ({item}) => (
    <View
      style={{
        width: 180,
        backgroundColor: '#fff',
        marginBottom: 2,
        borderRadius: 14,
        marginRight: 10,
        paddingBottom: 25,

        }}>

           <Image
            style={styles.imgTCH}
            source={item.photo}
            />
      <View style={styles.amountTCH}>
        <Image style={styles.imgIcon} source={require('./img/icon-logo.png')} />
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.textTCH}>
          {item.text}


        <Text style={styles.textAmount}>{item.amount}</Text>
        <Text style={styles.bean}>BEAN</Text>

            </View>
    </View>
  );

  const renderItem3 = ({item}) => (
    <View
      style={{
        width: 370,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 14,
        padding: 15,
        marginRight: 10,
        marginBottom: 10,

      <Image
        style={{width: 80, height: 80, alignSelf: 'center'}}
        source={item.photo}
      />

      <View style={styles.text}>
        <Text style={styles.textSponsor}>{item.sponsor}</Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.textHeading}>
          {item.heading}
        </Text>
      </View>
      <View style={styles.wapAmount}>
        <Text style={styles.textAmount}>{item.amount}</Text>
        <Text style={styles.bean}>BEAN</Text>
      </View>

        </View>
  );
  return (
    <View style={styles.container}>
      {/* <Text>hhwid2hich23fh</Text> */}
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.wap}>
        <View style={[styles.vouchers, styles.general]}>
          <View style={[styles.vouchersHeading, styles.range]}>
            <Text style={styles.vouchersText}>Nổi bật</Text>

            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                width: 100,
                // paddingHorizontal: 1,
                paddingVertical: 8,
                borderRadius: 16,
                alignItems: 'center',
              }}
              // onPress={() => {}}
            >
              <Text
                style={{fontSize: 12, color: '#d8a874', fontWeight: 'bold'}}>
                Xem Tất Cả
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.listVouchers]}>
            <FlatList

                        data={DATA}
              horizontal={true}
              // numColumns={1}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              // columnWrapperStyle={{ justifyContent:'space-around',marginBottom:10 }}
              style={{paddingLeft: 14}}
            />
          </View>
        </View>

        <View style={[styles.vouchers, styles.general]}>
          <View style={[styles.vouchersHeading, styles.range]}>
            <Text style={styles.vouchersText}>Từ The Coffee House</Text>

            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                width: 100,
                // paddingHorizontal: 1,
                paddingVertical: 8,
                borderRadius: 16,
                alignItems: 'center',
              }}
              // onPress={() => {}}
            >
              <Text
                style={{fontSize: 12, color: '#d8a874', fontWeight: 'bold'}}>
                Xem Tất Cả
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.listVouchers]}>
            <FlatList

                        data={DATA1}
              horizontal={true}
              // numColumns={1}
              renderItem={renderItem1}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              // columnWrapperStyle={{ justifyContent:'space-around',marginBottom:10 }}
              style={{paddingLeft: 14}}
            />
          </View>
        </View>

        <View style={[styles.vouchers, styles.general]}>
          <View style={[styles.vouchersHeading, styles.range]}>
            <Text style={styles.vouchersText}>Từ đối tác</Text>

            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                width: 100,
                // paddingHorizontal: 1,
                paddingVertical: 8,
                borderRadius: 16,
                alignItems: 'center',
              }}
              // onPress={() => {}}
            >
              <Text
                style={{fontSize: 12, color: '#d8a874', fontWeight: 'bold'}}>
                Xem Tất Cả
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.listVouchers]}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <FlatList
                contentContainerStyle={{
                  alignSelf: 'flex-start',
                }}
                data={DATA3}
                // horizontal={true}
                numColumns={DATA3.length / 3}
                renderItem={renderItem3}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                // columnWrapperStyle={{ justifyContent:'space-around',marginBottom:10 }}
                style={{paddingLeft: 14}}
              />
            </ScrollView>
          </View>
        </View>

        <View style={[styles.vouchers, styles.general]}>
          <View style={[styles.vouchersHeading, styles.range]}>
            <Text style={styles.vouchersText}>Các loại ưu đãi</Text>
          </View>

          <View style={{backgroundColor: '#fff'}}>
            <View style={styles.wapTypes}>
              <View style={styles.types}>
                <Image
                  style={styles.iconImg}
                  source={require('./img/icon1.png')}
                />
                <Text style={styles.typesText}>Tất cả</Text>
              </View>
              <FontAwesome5
                name="angle-right"
                color="#ccc"
                size={18}
                style={styles.icon}
              />
            </View>

            <View style={styles.wapTypes}>
              <View style={styles.types}>
                <Image
                  style={styles.iconImg}
                  source={require('./img/icon2.png')}
                />
                <Text style={styles.typesText}>The Coffee House</Text>
              </View>
              <FontAwesome5
                name="angle-right"
                color="#ccc"
                size={18}
                style={styles.icon}
              />
            </View>

            <View style={styles.wapTypes}>
              <View style={styles.types}>
                <Image
                  style={styles.iconImg}
                  source={require('./img/icon3.png')}
                />
                <Text style={styles.typesText}>Ăn uống</Text>
              </View>
              <FontAwesome5
                name="angle-right"
                color="#ccc"
                size={18}
                style={styles.icon}
              />
            </View>

            <View style={styles.wapTypes}>
              <View style={styles.types}>
                <Image
                  style={styles.iconImg}
                  source={require('./img/icon4.png')}
                />
                <Text style={styles.typesText}>Du lịch</Text>
              </View>
              <FontAwesome5
                name="angle-right"
                color="#ccc"
                size={18}
                style={styles.icon}
              />
            </View>

            <View style={styles.wapTypes}>
              <View style={styles.types}>
                <Image
                  style={styles.iconImg}
                  source={require('./img/icon5.png')}
                />
                <Text style={styles.typesText}>Mua sắm</Text>
              </View>
              <FontAwesome5
                name="angle-right"
                color="#ccc"
                size={18}
                style={styles.icon}
              />
            </View>

            <View style={styles.wapTypes}>
              <View style={styles.types}>
                <Image
                  style={styles.iconImg}
                  source={require('./img/icon6.png')}
                />
                <Text style={styles.typesText}>Giải trí</Text>
              </View>
              <FontAwesome5
                name="angle-right"
                color="#ccc"
                size={18}
                style={styles.icon}
              />
            </View>

            <View style={styles.wapTypes}>
              <View style={styles.types}>
                <Image
                  style={styles.iconImg}
                  source={require('./img/icon7.png')}
                />
                <Text style={styles.typesText}>Dịch vụ</Text>
              </View>
              <FontAwesome5
                name="angle-right"
                color="#ccc"
                size={18}
                style={styles.icon}
              />
            </View>

            <View style={styles.wapTypes}>
              <View style={styles.types}>
                <Image
                  style={styles.iconImg}
                  source={require('./img/icon8.png')}
                />
                <Text style={styles.typesText}>Giới hạn</Text>
              </View>
              <FontAwesome5
                name="angle-right"
                color="#ccc"
                size={18}
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f4f4f4',
    // alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red'

  },
  wap: {
    height: 800,
  },
  range: {
    marginLeft: 14,
    marginRight: 14,
  },
  general: {
    marginTop: 20,
  },

  listVouchers: {
    borderRadius: 14,


  },

  vouchersHeading: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 20,
  },
  vouchersText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  imgAmount: {
    width: '100%',
    height: 320,
    marginBottom: 10,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingBottom: 30,
  },
  textSponsor: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },

  text: {
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
  },
  textHeadingAmount: {
    fontSize: 16,
    width: 250,
    color: '#333',
  },
  textHeading: {
    fontSize: 16,
    width: 170,
    color: '#333',


  },

  wapAmount: {
    textAlign: 'center',

    alignSelf: 'center',

  },
  textAmount: {
    backgroundColor: '#ddefd7',
    width: 60,
    height: 25,
    borderRadius: 14,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6eb95a',
    alignSelf: 'center',
    justifyContent: 'center',

  },
  bean: {
    alignSelf: 'center',
    fontSize: 12,
    color: '#333',
    // fontWeight:'bold',
  },

  imgTCH: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },

  amountTCH: {
    textAlign: 'center',
    alignItems: 'center',
  },
  imgIcon: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  textTCH: {
    marginBottom: 15,
    marginTop: 10,
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
  },
  wapTypes: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    marginLeft: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#f4f4f4',
  },
  types: {
    flexDirection: 'row',

  },
  iconImg: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    marginRight: 20,


  },
  typesText: {
    fontSize: 18,
    alignSelf: 'center',
  },

  icon: {
    alignSelf: 'center',
    paddingRight: 10,
  },
});
