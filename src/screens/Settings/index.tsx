import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {TouchableOpacity, View, Text} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {Colors, Metrics} from '../../assets';
import {Logout} from '../../reduxs/actions/Home.act';
import {Container, EditAddress, Header} from '../components';

const SettingScreen = (props: {
  logout: () => void;
  info: {
    name: string;
    phone: string;
    email: string;
    address: string;
    sex?: string | undefined;
    BOD?: string | undefined;
  };
  login: boolean;
}) => {
  const LogOut = async () => {
    await AsyncStorage.setItem('id', '');
    Alert.alert('Thông báo', 'Bạn đã đăng xuất tài khoản thành công', [
      {
        text: 'Ok',
        onPress: () => {
          navigation.navigate('Home');
        },
      },
    ]);
    props.logout();
  };

  const navigation = useNavigation();

  const Login = useCallback(() => {
    navigation.navigate('login');
  }, [navigation]);

  console.log(props.info);

  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Header cart={true} title={'Information'} />
      <View spread flex-1 centerH paddingV-30>
        <EditAddress data={props.info} dateOfBirth={true} />
        {props.login ? (
          <TouchableOpacity br20 center style={styles.buttonS} onPress={LogOut}>
            <Text style={styles.fontSize}>Logout</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity br20 center style={styles.buttonS} onPress={Login}>
            <Text style={styles.fontSize}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonS: {
    width: Metrics.screen.width - 60,
    height: 60,
    backgroundColor: Colors.blueDark10,
  },
  fontSize: {
    fontSize: 19,
    color: Colors.orangeCarrot,
    fontWeight: '700',
  },
});

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

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  logout: () => dispatch(Logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);
