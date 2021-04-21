import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity, View, Text} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {Colors, Metrics} from '../../assets';
import {getInfo} from '../../reduxs/actions/Home.act';
import {Container, EditAddress, Header} from '../components';

const settingScreen = (props: {getInfo: () => void; info: any}) => {
  const LogOut = async () => {
    await AsyncStorage.setItem('id', '');
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useState(() => {
    props.getInfo();
  });
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Header cart={true} title={'Thông tin'} />
      <View spread flex-1 centerH paddingV-30>
        <EditAddress data={props.info} dateOfBirth={true} />
        <TouchableOpacity br20 center style={styles.buttonS} onPress={LogOut}>
          <Text style={styles.fontSize}>Đăng xuất</Text>
        </TouchableOpacity>
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

const mapStateToProps = (state: {loading: boolean; info: any}) => {
  const {loading} = state;
  const {info} = state;
  return {
    loading: loading,
    info: info,
  };
};

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  getInfo: () => dispatch(getInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(settingScreen);
