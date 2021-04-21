import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity, Image} from 'react-native-ui-lib';
import {Colors, Icons, Metrics} from '../../assets';

interface Props {
  onPress?: (item: any) => void;
  title: string;
  iconLeft: boolean;
  disable?: boolean;
}

const buttonAccept = (props: Props) => {
  return (
    <TouchableOpacity
      disabled={props.disable}
      row
      style={props.disable ? styles.ButtonF : styles.Button}
      onPress={props.onPress}
      center>
      {props.iconLeft && <Image source={Icons.home.cart} marginR-15 />}
      <Text style={styles.titleButton}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    width: Metrics.screen.width - 60,
    height: 60,
    backgroundColor: Colors.orangeCarrot,
    borderRadius: 30,
    justifyContent: 'center',
    marginBottom: 20,
  },
  ButtonF: {
    width: Metrics.screen.width - 60,
    height: 60,
    backgroundColor: Colors.orangeCarrot,
    borderRadius: 30,
    justifyContent: 'center',
    marginBottom: 20,
    opacity: 0.5,
  },
  titleButton: {
    alignSelf: 'center',
    fontSize: 20,
    color: Colors.white,
  },
});

export default buttonAccept;
