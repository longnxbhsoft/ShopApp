import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {Colors, Metrics} from '../../assets';
import {DataOnCart} from '../../untils/dummyData';
import {ButtonAccept, Container, Header} from '../components';

const AddressConfirmScreen = () => {
  const navigation = useNavigation();

  const onNext = () => {
    navigation.navigate('check');
  };

  const width = Metrics.screen.width - 60;
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Header title={'Thêm địa chỉ'} isBack={true} delivery={true} active={1} />
      <View flex-1 centerH>
        <View flex-10 width={width} center>
          <View
            height={400}
            width={width}
            backgroundColor={Colors.blueDark10}
            br20>
            <View />
          </View>
        </View>
        <View flex-2 spread paddingT-15 paddingB-10>
          <ButtonAccept onPress={onNext} iconLeft={false} title={'Tiếp tục'} />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  font15: {
    fontSize: 15,
    color: Colors.black,
  },
  font23: {
    fontSize: 23,
    fontWeight: '700',
    color: Colors.redAlizarin38,
  },
});

export default AddressConfirmScreen;
