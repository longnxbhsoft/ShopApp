import React, {FC, memo, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native-ui-lib';
import {StyleSheet, Image} from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../assets';
import {icons} from '../../assets/Images';

interface Props {
  isBack?: boolean;
}

const Header: FC<Props> = ({isBack}) => {
  const navigation = useNavigation();

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View
      center
      paddingH-16
      row
      style={[styles.header, isBack ? {} : styles.headerWidthBack]}>
      {isBack && (
        <TouchableOpacity marginL-2 onPress={onGoBack}>
          <Image source={icons.login.exit} />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onGoBack}>
        <Image source={icons.login.exit} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    height: 40,
    justifyContent: 'space-between',
  },
  headerWidthBack: {
    justifyContent: 'flex-end',
  },
});

export default memo<Props>(Header);
