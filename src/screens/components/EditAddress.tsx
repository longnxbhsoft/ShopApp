// import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Image, TouchableOpacity} from 'react-native-ui-lib';
import {Colors, Icons, Metrics} from '../../assets';

interface Props {
  dateOfBirth: boolean;
  data: {
    name: string;
    phone: string;
    email: string;
    address: string;
    sex?: string;
    BOD?: string;
  };
}

const AddressEdit = (props: Props) => {
  const width = Metrics.screen.width - 60;
  const [sex, setSex] = useState('');
  useEffect(() => {
    if (props.data.sex === 'men') {
      setSex('Nam');
    }
    if (props.data.sex === 'women') {
      setSex('Nữ');
    }
    if (props.data.sex === 'All') {
      setSex('Tất cả');
    }
  }, [props.data.sex]);
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
          <Text style={styles.font16}>Full name</Text>
          <Text style={styles.font23}>{props.data.name}</Text>
        </View>
        <View flex-1 center>
          <TouchableOpacity>
            <Image source={Icons.home.edit} />
          </TouchableOpacity>
        </View>
      </View>
      <View marginH-10 centerV row height={60}>
        <View flex-5>
          <Text style={styles.font16}>Phone number</Text>
          <Text style={styles.font23}>{props.data.phone}</Text>
        </View>
        <View flex-1 center>
          <TouchableOpacity>
            <Image source={Icons.home.edit} />
          </TouchableOpacity>
        </View>
      </View>
      {props.dateOfBirth && (
        <>
          <View marginH-10 centerV row height={60}>
            <View flex-5>
              <Text style={styles.font16}>Date of birth</Text>
              <Text style={styles.font23}>{props.data.BOD}</Text>
            </View>
            <View flex-1 center>
              <TouchableOpacity>
                <Image source={Icons.home.edit} />
              </TouchableOpacity>
            </View>
          </View>
          <View marginH-10 centerV row height={60}>
            <View flex-5>
              <Text style={styles.font16}>Sex</Text>
              <Text style={styles.font23}>{sex}</Text>
            </View>
            <View flex-1 center>
              <TouchableOpacity>
                <Image source={Icons.home.edit} />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
      <View marginH-10 centerV row height={60}>
        <View flex-5>
          <Text style={styles.font16}>Address</Text>
          <Text numberOfLines={1} style={styles.font23}>
            {props.data.address}
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
            {props.data.email}
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
    color: Colors.blueNavy,
  },
  font23: {
    fontSize: 17,
    fontWeight: '500',
    color: Colors.blueMalibu,
    marginTop: 6,
  },
});

export default AddressEdit;
