import React from 'react';
import {
  ImageSourcePropType,
  Image,
  TextInput,
  KeyboardTypeOptions,
  StyleSheet,
} from 'react-native';
import {View} from 'react-native-ui-lib';
import {Colors, Metrics} from '../../assets';
const widths = Metrics.screen.width - 60;
interface Props {
  leftIcons: ImageSourcePropType;
  placeholder: string;
  onChangeText?: (text: any) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  isSecure?: boolean;
}
const LoginScreen = (props: Props) => {
  return (
    <View
      width={widths}
      height={60}
      backgroundColor={Colors.blueSolitude}
      br30
      row
      marginB-15>
      <View flex-2 row center>
        <Image source={props.leftIcons} />
      </View>
      <View flex-6 centerV paddingH-10>
        <TextInput
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          keyboardType={props.keyboardType}
          secureTextEntry={props.isSecure}
          placeholderTextColor={Colors.blueDark}
          style={styles.colors}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colors: {
    color: Colors.blueDark,
  },
});

export default LoginScreen;
