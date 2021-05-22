import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {Colors, Metrics} from '../../assets';
import {CartList} from '../../domain';
import List from './components/List';
import {ButtonAccept, Container, Header, Loader} from '../components';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {DeleteCart, getDetail, postOrder} from '../../reduxs/actions/Home.act';

const CheckOrderScreens = (props: {
  Carts: readonly CartList[] | null | undefined;
  numberCart:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  route: {params: {name: any; phone: any; address: any; total: any}};
  postOrder: (
    arg0: any,
    arg1: string,
    arg2: any,
    arg3: any,
    arg4: any,
    arg5: any,
    arg6: any,
  ) => void;
  deleteCart: () => void;
  success: boolean;
  loading: any;
  dataUser: any;
}) => {
  const navigation = useNavigation();

  let formaters = new Intl.NumberFormat('us-US');

  const renderItem = ({item}: {item: CartList}) => {
    return (
      <List
        url={item.image}
        title={item.name}
        quantity={item.quantity}
        price={item.price.salePrice}
        total={item.price.salePrice * item.quantity}
      />
    );
  };
  const carts = props.Carts;

  const quantity = props.numberCart;

  const name = props.route.params.name;

  const phone = props.route.params.phone;

  const address = props.route.params.address;

  const total = props.route.params.total;

  const width = Metrics.screen.width;

  const userID = props.dataUser;

  const renderKeyExtractor = (item: any, index: number) => index.toString();

  const Order = () => {
    props.postOrder(carts, userID, quantity, total, address, phone, name);
    props.deleteCart();
  };

  useEffect(() => {
    if (props.success === true) {
      navigation.navigate('success');
      //
    }
  });

  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Header title={'Confirm'} isBack={true} delivery={true} active={2} />
      <Loader loading={props.loading} />
      <View flex-1 centerH>
        <View flex-6 centerH>
          <FlatList
            data={props.Carts}
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
              <Text style={styles.font15}>Infomation Payment</Text>
            </View>
            <View row spread marginV-12>
              <Text style={styles.font15}>Number</Text>
              <Text style={styles.font15}>{props.numberCart}</Text>
            </View>
            <View row spread>
              <Text style={styles.font15}>Total</Text>
              <Text style={styles.font15}>{formaters.format(total)} đ</Text>
            </View>
          </View>
          <ButtonAccept iconLeft={false} title={'Order'} onPress={Order} />
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

const mapStateToProps = (state: {
  Carts?: any;
  numberCart?: any;
  loading: boolean;
  success: boolean;
  info: any;
}) => {
  const {Carts} = state;
  const {numberCart} = state;
  const {loading} = state;
  const {success} = state;
  const {info} = state;
  return {
    Carts: Carts,
    numberCart: numberCart,
    loading: loading,
    success: success,
    dataUser: info._id,
  };
};

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  getDetail: (id: string) => dispatch(getDetail(id)),
  postOrder: (
    cart: [],
    userID: string,
    quantity: number,
    total: number,
    address: string,
    phone: string,
    name: string,
  ) => dispatch(postOrder(cart, userID, quantity, total, address, phone, name)),
  deleteCart: () => dispatch(DeleteCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOrderScreens);
