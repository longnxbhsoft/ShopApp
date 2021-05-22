import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {View} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {Colors, Metrics} from '../../assets';
import {ButtonAccept, Container, EditAddress, Header} from '../components';
const AddressConfirmScreen = (props: {
  info: {
    name: string;
    phone: string;
    email: string;
    address: string;
    sex?: string | undefined;
    BOD?: string | undefined;
  };
  route: {params: {total: any}};
  login: boolean;
}) => {
  const navigation = useNavigation();

  const onNext = () => {
    navigation.navigate('check', {
      name: props.info.name,
      phone: props.info.phone,
      address: props.info.address,
      total: props.route.params.total,
    });
  };

  const Login = useCallback(() => {
    navigation.navigate('login');
  }, [navigation]);

  const width = Metrics.screen.width - 60;
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Header
        title={'Add new address'}
        isBack={true}
        delivery={true}
        active={1}
      />
      <View flex-1 centerH>
        <View flex-10 width={width} center>
          <EditAddress data={props.info} dateOfBirth={false} />
        </View>
        <View flex-2 spread paddingT-15 paddingB-10>
          {props.login ? (
            <ButtonAccept onPress={onNext} iconLeft={false} title={'Next'} />
          ) : (
            <ButtonAccept onPress={Login} iconLeft={false} title={'Login'} />
          )}
        </View>
      </View>
    </Container>
  );
};

const mapStateToProps = (state: {
  loading: boolean;
  info: any;
  login: boolean;
}) => {
  const {loading} = state;
  const {info} = state;
  const {login} = state;
  return {
    loading: loading,
    info: info,
    login: login,
  };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressConfirmScreen);
