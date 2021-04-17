import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity, Image, View, Card} from 'react-native-ui-lib';
import {Colors, Icons} from '../../../assets';
import 'intl';
import 'intl/locale-data/jsonp/en';

interface Props {
  url?: string | undefined;
  name: string;
  price: number;
  discout: number;
  percent: number;
  goToDetail?: () => void;
  addCart?: () => void;
}

const ItemsProduct = (props: Props) => {
  let formaters = new Intl.NumberFormat('us-US');
  return (
    <Card width={150} height={190} br30 marginV-10>
      <TouchableOpacity flex-1 onPress={props.goToDetail}>
        <View flex-6>
          <Image
            source={{uri: props.url}}
            resizeMode={'cover'}
            style={styles.images}
          />
        </View>
        <View flex-4 paddingH-10>
          <Text numberOfLines={1} style={styles.fontSizeL} marginT-7>
            {props.name}
          </Text>
          <Text marginT-5 color={Colors.orangeCarrot} style={styles.fontPrice}>
            đ {formaters.format(props.price)}
          </Text>
          <View row centerV>
            <Text
              numberOfLines={1}
              color={Colors.greySilver}
              style={styles.Discount}
              marginT-5>
              đ {props.discout}
            </Text>
            <Text
              marginT-5
              marginL-5
              color={Colors.redAlizarin}
              style={styles.DiscountPercent}>
              | -{props.percent}%
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
    color: Colors.black38,
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
    width: 150,
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  addCart: {
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default ItemsProduct;
