import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native-ui-lib';
import {Colors, Metrics} from '../../assets';
import {ButtonAccept, Container, EditAddress, Header} from '../components';
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
          <EditAddress dateOfBirth={false} />
        </View>
        <View flex-2 spread paddingT-15 paddingB-10>
          <ButtonAccept onPress={onNext} iconLeft={false} title={'Tiếp tục'} />
        </View>
      </View>
    </Container>
  );
};

export default AddressConfirmScreen;
