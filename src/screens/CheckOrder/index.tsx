import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {Colors, Metrics} from '../../assets';
import {CartList} from '../../domain';
import List from './components/List';
import {ButtonAccept, Container, Header} from '../components';
import {DataOnCart} from '../../untils/dummyData';
import {useNavigation} from '@react-navigation/native';

const CheckOrderScreens = () => {
  const navigation = useNavigation();

  const Order = () => {
    navigation.navigate('success');
  };
  const renderItem = ({item}: {item: CartList}) => {
    return (
      <List
        url={item.url}
        title={item.title}
        quantity={item.quantity}
        price={item.price}
        total={item.total}
      />
    );
  };
  const width = Metrics.screen.width;
  const renderKeyExtractor = (item: any, index: number) => index.toString();
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Header
        title={'Xác nhận sản phẩm'}
        isBack={true}
        delivery={true}
        active={2}
      />
      <View flex-1 centerH>
        <View flex-6 centerH>
          <FlatList
            data={DataOnCart}
            renderItem={renderItem}
            keyExtractor={renderKeyExtractor}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View flex-4 spread centerH paddingB-20>
          <View flex-3>
            <View
              marginB-10
              row
              spread
              centerV
              width={width - 40}
              height={40}
              backgroundColor={Colors.blueDark10}>
              <Text style={styles.font15}>Thông tin thanh toán</Text>
            </View>
            <View row spread>
              <Text style={styles.font15}>Tổng</Text>
              <Text style={styles.font15}>100,000 đ</Text>
            </View>
            <View row spread marginV-12>
              <Text style={styles.font15}>Số sản phẩm</Text>
              <Text style={styles.font15}>2</Text>
            </View>
            <View row spread>
              <Text style={styles.font23}>Thanh toán</Text>
              <Text style={styles.font23}>100,000 đ</Text>
            </View>
          </View>
          <ButtonAccept
            iconLeft={false}
            title={'Tiến hành đặt hàng'}
            onPress={Order}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  font15: {
    fontSize: 15,
    color: Colors.blueNavy,
  },
  font23: {
    fontSize: 23,
    fontWeight: '700',
    color: Colors.redAlizarin38,
  },
});

export default CheckOrderScreens;
