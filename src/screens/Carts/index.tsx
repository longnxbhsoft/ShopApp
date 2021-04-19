import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {Colors} from '../../assets';
import {ButtonAccept, Container, Header} from '../components';
import CartItem from './components/CartItem';
import {CartList} from '../../domain';
import {DataOnCart} from '../../untils/dummyData';
import {useNavigation} from '@react-navigation/native';

const CartScreen = () => {
  const renderItem = ({item}: {item: CartList}) => {
    return (
      <CartItem
        url={item.url}
        title={item.title}
        quantity={item.quantity}
        price={item.price}
        total={item.total}
      />
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [total, setTotal] = useState(10);

  const renderKeyExtractor = (item: any, index: number) => index.toString();

  const navigation = useNavigation();

  const onNext = () => {
    navigation.navigate('address');
  };
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Header cart={true} title={'Giỏ hàng'} />
      <View flex-1 centerH>
        <View flex-8 centerH>
          <FlatList
            data={DataOnCart}
            renderItem={renderItem}
            keyExtractor={renderKeyExtractor}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View flex-3 spread paddingT-15>
          <View flex-3>
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
            disable={total === 0 ? true : false}
            onPress={onNext}
            iconLeft={false}
            title={'Thanh toán'}
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

export default CartScreen;
