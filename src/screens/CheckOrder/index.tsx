import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {Colors} from '../../assets';
import {ButtonAccept, Container, Header} from '../components';

const CheckOrderScreens = () => {
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
        <View flex-7 centerH />
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

export default CheckOrderScreens;
