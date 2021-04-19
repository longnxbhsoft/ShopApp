import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {Colors, Metrics} from '../../assets';
import {CartList} from '../../domain';
import List from './components/List';
import {ButtonAccept, Container, Header} from '../components';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

const CheckOrderScreens = (props: {
  Carts: readonly CartList[] | null | undefined;
  numberCart:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const navigation = useNavigation();

  const Order = () => {
    navigation.navigate('success');
  };
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
              <Text style={styles.font15}>Thông tin thanh toán</Text>
            </View>
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

const mapStateToProps = (state: {Carts?: any; numberCart?: any}) => {
  const {Carts} = state;
  const {numberCart} = state;
  return {
    Carts: Carts,
    numberCart: numberCart,
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOrderScreens);
