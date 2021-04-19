import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {Image, View} from 'react-native-ui-lib';

interface Props {
  imageUri?: ImageSourcePropType | undefined;
  tintColor: string;
  textLabel: string | undefined;
  isFocused: boolean;
}

const ItemTabNavigation = (props: Props) => {
  return (
    <View center width={70} height={50}>
      <Image
        source={props.imageUri}
        style={[
          {
            tintColor: props.tintColor,
          },
        ]}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default ItemTabNavigation;
