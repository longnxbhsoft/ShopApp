import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {Colors, Images} from '../../assets';
import {ButtonAccept, Container, Header} from '../components';

const SuccessOrderScreens = (props: {
  postOrder:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Header
        title={'Đặt hàng thành công'}
        isBack={true}
        delivery={true}
        active={3}
      />
      <View flex-1 centerH center>
        <Image source={Images.success} />
        <Text marginT-25>Đơn hàng bạn đã đặt thành công!</Text>
        <Text marginB-40 marginT-8>
          ID đơn hàng #{props.postOrder}
        </Text>
        <ButtonAccept
          iconLeft={false}
          title={'Trở về trang chủ'}
          onPress={goToHome}
        />
      </View>
    </Container>
  );
};

const mapStateToProps = (state: {postOrder: any}) => {
  const {postOrder} = state;
  return {
    postOrder: postOrder,
  };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuccessOrderScreens);
