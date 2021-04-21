import React, {useCallback, useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {View, Text} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {Colors, Icons} from '../../assets';
import {Register} from '../../reduxs/actions/Home.act';
import {ButtonAccept, Container, Loader} from '../components';
import {Inputs} from '../components';

const RegisterScreen = (props: {
  navigation: {goBack: () => void};
  register: (
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: string,
    arg5: string,
    arg6: string,
  ) => void;
  success: any;
  error: string | undefined;
  loading: any;
}) => {
  const goToLogin = () => {
    props.navigation.goBack();
  };

  const [name, setName] = useState('');

  const [password, setPassWord] = useState('');

  const [phone, setPhone] = useState('');

  const [address, setAddress] = useState('');

  const [sex, setSex] = useState('');

  const [birthday, setBirth] = useState('');

  const [email, setEmail] = useState('');

  const phoneChange = useCallback((text: any) => {
    setPhone(text);
  }, []);

  const nameChange = useCallback((text: any) => {
    setName(text);
  }, []);

  const addressChange = useCallback((text: any) => {
    setAddress(text);
  }, []);

  const sexChange = useCallback((text: any) => {
    setSex(text);
  }, []);

  const emailChange = useCallback((text: any) => {
    setEmail(text);
  }, []);

  const birthChange = useCallback((text: any) => {
    setBirth(text);
  }, []);

  const passwordChange = useCallback((text: any) => {
    setPassWord(text);
  }, []);

  const Submit = () => {
    props.register(name, phone, password, address, email, sex, birthday);
    if (props.success) {
      Alert.alert('Thông báo', 'Đăng kí tài khoản thành công!');
    } else {
      Alert.alert('Thông báo', props.error);
    }
  };
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <KeyboardAvoidingView style={styles.keyView} behavior={'padding'}>
        <Loader loading={props.loading} />
        <View flex-9 style={styles.container} centerH>
          <View flex-2 />
          <View height={60} center>
            <Text style={styles.fonts}>Đăng kí</Text>
          </View>
          <ScrollView style={styles.scroll}>
            <Inputs
              leftIcons={Icons.login.fullName}
              placeholder={'Họ và Tên'}
              onChangeText={nameChange}
            />
            <Inputs
              leftIcons={Icons.login.email}
              placeholder={'Số điện thoại'}
              keyboardType={'phone-pad'}
              onChangeText={phoneChange}
            />
            <Inputs
              leftIcons={Icons.login.pass}
              placeholder={'Mật khẩu'}
              onChangeText={passwordChange}
            />
            <Inputs
              leftIcons={Icons.login.pass}
              placeholder={'Địa chỉ'}
              onChangeText={addressChange}
            />
            <Inputs
              leftIcons={Icons.login.fullName}
              placeholder={'Giới tính'}
              onChangeText={sexChange}
            />
            <Inputs
              leftIcons={Icons.login.pass}
              placeholder={'Ngày sinh'}
              onChangeText={birthChange}
            />
            <Inputs
              leftIcons={Icons.login.email}
              placeholder={'Email'}
              onChangeText={emailChange}
            />
          </ScrollView>
          <ButtonAccept onPress={Submit} iconLeft={false} title={'Đăng kí'} />
        </View>
        <View flex-1 center>
          <TouchableOpacity onPress={goToLogin}>
            <Text color={Colors.blueNavy}>Đăng nhập?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  scroll: {
    paddingVertical: 10,
    marginBottom: 10,
  },
  keyView: {
    flex: 1,
  },
});

const mapStateToProps = (state: {
  loading: boolean;
  success: boolean;
  error: any;
}) => {
  const {loading} = state;
  const {success} = state;
  const {error} = state;
  return {
    loading: loading,
    success: success,
    error: error,
  };
};

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  register: (
    name: string,
    phone: string,
    password: number,
    address: string,
    email: string,
    sex: string,
    BOD: string,
  ) => dispatch(Register(name, phone, password, address, email, sex, BOD)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
