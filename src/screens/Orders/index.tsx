import React, {useCallback, useEffect} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {View} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {Colors} from '../../assets';
import {HistoryOrder} from '../../domain';
import {getOrder} from '../../reduxs/actions/Home.act';
import {Container, Header} from '../components';
import OrderItem from './components/OrderItem';

const OrdersScreen = (props: {
  getOrder: (arg0: any) => void;
  dataUser: any;
  order: readonly any[] | null | undefined;
  loading: boolean;
}) => {
  const renderItem = ({item}: {item: HistoryOrder}) => {
    return <OrderItem _id={item._id} product={item.product} />;
  };

  useEffect(() => {
    props.getOrder(props.dataUser);
  }, [props]);

  const Refesh = useCallback(() => {
    props.getOrder(props.dataUser);
  }, [props]);

  const renderFooter = () => {
    return (
      // Footer View with Loader
      <View style={styles.footer}>
        {props.loading ? (
          <ActivityIndicator color={Colors.orangeCarrot} />
        ) : null}
      </View>
    );
  };

  const renderKeyExtractor = (item: any, index: number) => index.toString();
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Header cart={true} title={'Your orders'} />
      <View centerH flex-1>
        <FlatList
          data={props.order}
          renderItem={renderItem}
          keyExtractor={renderKeyExtractor}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onTouchStart={Refesh}
          ListFooterComponent={renderFooter}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const mapStateToProps = (state: {
  order?: any;
  dataUser: any;
  loading: boolean;
}) => {
  const {order} = state;
  const {dataUser} = state;
  const {loading} = state;
  return {
    order: order,
    dataUser: dataUser,
    loading: loading,
  };
};

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  getOrder: (userId: string) => dispatch(getOrder(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersScreen);
