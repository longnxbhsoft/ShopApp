import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {View} from 'react-native-ui-lib';
import {Colors} from '../../assets';
import {HistoryOrder} from '../../domain';
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

export default ordersScreen;
