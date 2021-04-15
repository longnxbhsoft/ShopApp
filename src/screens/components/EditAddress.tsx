// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Image, TouchableOpacity} from 'react-native-ui-lib';
import {Colors, Icons, Metrics} from '../../assets';

interface Props {
  dateOfBirth: boolean;
}

const AddressEdit = (props: Props) => {
  //   const navigation = useNavigation();

  //   const onNext = () => {
  //     navigation.navigate('check');
  //   };

  const width = Metrics.screen.width - 60;
  return (
    <View
      marginV-20
      width={width}
      paddingV-30
      spread
      backgroundColor={Colors.blueDark10}
      br20>
      <View marginH-10 centerV row height={60}>
        <View flex-5>
          <Text style={styles.font16}>Họ và Tên</Text>
          <Text style={styles.font23}>Nguyễn Xuân Long</Text>
        </View>
        <View flex-1 center>
          <TouchableOpacity>
            <Image source={Icons.home.edit} />
          </TouchableOpacity>
        </View>
      </View>
      <View marginH-10 centerV row height={60}>
        <View flex-5>
          <Text style={styles.font16}>Số điện thoại</Text>
          <Text style={styles.font23}>0988888888</Text>
        </View>
        <View flex-1 center>
          <TouchableOpacity>
            <Image source={Icons.home.edit} />
          </TouchableOpacity>
        </View>
      </View>
      {props.dateOfBirth && (
        <View marginH-10 centerV row height={60}>
          <View flex-5>
            <Text style={styles.font16}>Ngày sinh</Text>
            <Text style={styles.font23}>23/02/2000</Text>
          </View>
          <View flex-1 center>
            <TouchableOpacity>
              <Image source={Icons.home.edit} />
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View marginH-10 centerV row height={60}>
        <View flex-5>
          <Text style={styles.font16}>Địa chỉ</Text>
          <Text numberOfLines={1} style={styles.font23}>
            Hoang Quoc Viet, Cau Giay, Ha Noi, Viet Nam
          </Text>
        </View>
        <View flex-1 center>
          <TouchableOpacity>
            <Image source={Icons.home.edit} />
          </TouchableOpacity>
        </View>
      </View>
      <View marginH-10 centerV row height={60}>
        <View flex-5>
          <Text style={styles.font16}>Email</Text>
          <Text numberOfLines={1} style={styles.font23}>
            example@gmail.com
          </Text>
        </View>
        <View flex-1 center>
          <TouchableOpacity>
            <Image source={Icons.home.edit} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  font16: {
    fontSize: 14,
    color: Colors.blueMalibu,
  },
  font23: {
    fontSize: 17,
    fontWeight: '500',
    color: Colors.blueMalibu,
  },
});

export default AddressEdit;
