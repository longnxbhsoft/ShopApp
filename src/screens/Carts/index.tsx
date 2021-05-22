import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {Colors} from '../../assets';
import {ButtonAccept, Container, Header} from '../components';
import CartItem from './components/CartItem';
import {CartList} from '../../domain';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {DeleteItem} from '../../reduxs/actions/Home.act';

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
        _id={item.product_id}
        url={item.image}
        title={item.name}
        quantity={item.quantity}
        price={item.price.salePrice}
        total={item.price.salePrice * item.quantity}
      />
    );
  };

  let TotalCart = 0;
  Object.keys(props.Carts).forEach(function (items) {
    TotalCart +=
      props.Carts[items].quantity * props.Carts[items].price.salePrice;
  });

  const [disable, setDisble] = useState(true);

  const renderKeyExtractor = (item: any, index: number) => index.toString();

  const navigation = useNavigation();

  const onNext = () => {
    navigation.navigate('address', {
      total: TotalCart,
    });
  };

  let formaters = new Intl.NumberFormat('us-US');

  useEffect(() => {
    if (TotalCart === 0) {
      setDisble(true);
    } else {
      setDisble(false);
    }
  }, [TotalCart]);

  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Header cart={true} title={'Carts'} />
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
              <Text style={styles.font15}>Number</Text>
              <Text style={styles.font15}>{props.numberCart}</Text>
            </View>
            <View row spread>
              <Text style={styles.font15}>Total</Text>
              <Text style={styles.font15}>{formaters.format(TotalCart)} đ</Text>
            </View>
          </View>
          <ButtonAccept
            disable={disable}
            onPress={onNext}
            iconLeft={false}
            title={'Payment'}
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

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  DeleteItem: (item: any) => dispatch(DeleteItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
