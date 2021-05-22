import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {Colors, Icons} from '../../assets';
import {Login} from '../../reduxs/actions/Home.act';
import {Container, Loader} from '../components';
import {Inputs, ButtonAccept} from '../components';

const LoginScreen = (props: {
  Login: (arg0: string, arg1: string) => void;
  loading: any;
  login: boolean;
}) => {
  const navigation = useNavigation();

  const createAnAcout = () => {
    navigation.navigate('registers');
  };

  const FbLogin = () => {
    navigation.navigate('fblogin');
  };
  const [phone, setPhone] = useState('');

  const [password, setPassWord] = useState('');

  const phoneChange = useCallback((text: any) => {
    setPhone(text);
  }, []);
  const passwordChange = useCallback((text: any) => {
    setPassWord(text);
  }, []);
  const gotoHome = async () => {
    props.Login(phone, password);
  };

  useEffect(() => {
    props.login ? navigation.goBack() : null;
  }, [navigation, props.login]);

  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <View flex-8 style={styles.container} centerH>
        <Loader loading={props.loading} />
        <View height={60} marginT-100 center>
          <Text style={styles.fonts}>Login</Text>
        </View>
        <View flex-2 />
        <View height={150} centerH backgroundColor={Colors.black01}>
          <Inputs
            leftIcons={Icons.login.email}
            placeholder={'Phone Number'}
            keyboardType={'phone-pad'}
            onChangeText={phoneChange}
          />
          <Inputs
            onChangeText={passwordChange}
            leftIcons={Icons.login.pass}
            placeholder={'Password'}
            isSecure={true}
          />
        </View>
        <View flex-1 />
        <TouchableOpacity onPress={FbLogin}>
          <Text color={Colors.blueNavy}>Forgot your password?</Text>
        </TouchableOpacity>
        <View flex-2 />
        <ButtonAccept onPress={gotoHome} iconLeft={false} title={'Login'} />
      </View>
      <View flex-2 center>
        <TouchableOpacity onPress={createAnAcout}>
          <Text color={Colors.blueNavy}>Create new account?</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    shadowColor: Colors.greyDrank,
    shadowOffset: {
      width: 1,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Colors.white,
  },
  fonts: {
    fontSize: 24,
    color: Colors.orangeCarrot,
  },
});

const mapStateToProps = (state: {loading: boolean; login: boolean}) => {
  const {loading} = state;
  const {login} = state;
  return {
    loading: loading,
    login: login,
  };
};

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  Login: (phone: string, password: string) => dispatch(Login(phone, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
