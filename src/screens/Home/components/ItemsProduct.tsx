import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity, Image, View, Card} from 'react-native-ui-lib';
import {Colors, Icons, Metrics} from '../../../assets';
import 'intl';
import 'intl/locale-data/jsonp/en';

interface Props {
  url?: string | undefined;
  name: string;
  price: number;
  discout: number;
  goToDetail?: () => void;
  addCart?: () => void;
}
const width = Metrics.screen.width / 2.5;
const ItemsProduct = (props: Props) => {
  let formaters = new Intl.NumberFormat('us-US');
  // const percent = (props.discout / props.price) * 100;
  return (
    <Card width={width} paddingB-15 br30 marginV-10>
      <TouchableOpacity flex-1 onPress={props.goToDetail}>
        <View flex-6>
          <Image
            source={{uri: props.url}}
            resizeMode={'cover'}
            style={styles.images}
          />
        </View>
        <View flex-4 paddingH-7>
          <Text numberOfLines={2} style={styles.fontSizeL} marginT-7>
            {props.name}
          </Text>
          <Text marginT-2 color={Colors.orangeCarrot} style={styles.fontPrice}>
            đ {formaters.format(props.price)}
          </Text>
          <View row centerV>
            <Text
              numberOfLines={1}
              color={Colors.greySilver}
              style={styles.Discount}
              marginT-2>
              đ {props.discout}
            </Text>
            <Text
              marginT-2
              marginL-5
              color={Colors.redAlizarin}
              style={styles.DiscountPercent}>
              {/* | -{percent}% */}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View
        absR
        width={30}
        height={30}
        backgroundColor={Colors.orangeCarrot}
        style={styles.addCart}
        center>
        <TouchableOpacity onPress={props.addCart}>
          <Image
            source={Icons.home.pluss}
            resizeMode={'cover'}
            width={15}
            height={15}
          />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  fontSizeL: {
    fontSize: 12,
    color: Colors.blueDark,
  },
  fontPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  Discount: {
    fontSize: 11,
    textDecorationLine: 'line-through',
  },
  DiscountPercent: {
    fontSize: 11,
  },
  images: {
    width: width,
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  addCart: {
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default ItemsProduct;
