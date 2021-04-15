import React from 'react';
import {StyleSheet} from 'react-native';
// import {StyleSheet, TouchableOpacity} from 'react-native';
import {TouchableOpacity, View, Text} from 'react-native-ui-lib';
import {Colors, Metrics} from '../../assets';
import {Container, EditAddress, Header} from '../components';

const settingScreen = () => {
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Header cart={true} title={'Thông tin'} />
      <View spread flex-1 centerH paddingV-30>
        <EditAddress dateOfBirth={true} />
        <TouchableOpacity br20 center style={styles.buttonS}>
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

export default settingScreen;
