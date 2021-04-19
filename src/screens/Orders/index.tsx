import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {View} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {Colors} from '../../assets';
import {HistoryOrder} from '../../domain';
import {getAllCategories} from '../../reduxs/actions/Home.act';
import {OrderHistory} from '../../untils/dummyData';
import {Container, Header} from '../components';
import OrderItem from './components/OrderItem';

const ordersScreen = () => {
  const renderItem = ({item}: {item: HistoryOrder}) => {
    return <OrderItem id={item.id} orderHistory={item.history} />;
  };
  const renderKeyExtractor = (item: any, index: number) => index.toString();
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Header cart={true} title={'Đơn hàng của bạn'} />
      <View centerH flex-1 paddingV-20>
        <FlatList
          data={OrderHistory}
          renderItem={renderItem}
          keyExtractor={renderKeyExtractor}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};

const mapStateToProps = (state: {all_products?: any; all_categories?: any}) => {
  const {all_products} = state;
  const {all_categories} = state;
  return {
    all_products: all_products,
    all_categories: all_categories,
  };
};

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  getAllCategories: () => dispatch(getAllCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ordersScreen);
