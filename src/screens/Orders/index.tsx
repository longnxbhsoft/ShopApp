import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {View} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {Colors} from '../../assets';
import {HistoryOrder} from '../../domain';
import {getOrder} from '../../reduxs/actions/Home.act';
import {Container, Header} from '../components';
import OrderItem from './components/OrderItem';

const ordersScreen = (props: {
  getOrder: () => void;
  order: readonly any[] | null | undefined;
}) => {
  const renderItem = ({item}: {item: HistoryOrder}) => {
    return <OrderItem _id={item._id} orderHistory={item.product} />;
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useState(() => {
    props.getOrder();
  });

  const renderKeyExtractor = (item: any, index: number) => index.toString();
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Header cart={true} title={'Đơn hàng của bạn'} />
      <View centerH flex-1 paddingV-20>
        <FlatList
          data={props.order}
          renderItem={renderItem}
          keyExtractor={renderKeyExtractor}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};

const mapStateToProps = (state: {order?: any}) => {
  const {order} = state;
  return {
    order: order,
  };
};

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  getOrder: () => dispatch(getOrder()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ordersScreen);
