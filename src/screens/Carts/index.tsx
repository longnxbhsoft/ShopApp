import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {Colors} from '../../assets';
import {ButtonAccept, Container, Header} from '../components';
import CartItem from './components/CartItem';
import {CartList} from '../../domain';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

const CartScreen = (props: {
  Carts: readonly CartList[] | null | undefined;
  numberCart:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const renderItem = ({item}: {item: CartList}) => {
    return (
      <CartItem
        url={item.image}
        title={item.name}
        quantity={item.quantity}
        price={item.price.salePrice}
        total={item.price.salePrice * item.quantity}
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
            data={props.Carts}
            renderItem={renderItem}
            keyExtractor={renderKeyExtractor}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View flex-3 spread paddingT-15>
          <View flex-3>
            <View row spread marginV-12>
              <Text style={styles.font15}>Số sản phẩm</Text>
              <Text style={styles.font15}>{props.numberCart}</Text>
            </View>
            <View row spread>
              <Text style={styles.font15}>Tổng</Text>
              <Text style={styles.font15}>100,000 đ</Text>
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

const mapStateToProps = (state: {Carts?: any; numberCart?: any}) => {
  const {Carts} = state;
  const {numberCart} = state;
  return {
    Carts: Carts,
    numberCart: numberCart,
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
