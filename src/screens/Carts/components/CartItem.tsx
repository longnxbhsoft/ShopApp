import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity, Image, View, Card} from 'react-native-ui-lib';
import {Colors, Icons, Metrics} from '../../../assets';
import 'intl';
import 'intl/locale-data/jsonp/en';

interface Props {
  url: string;
  title: string;
  quantity: number;
  price: number;
  total: number;
  OnPress?: () => void;
}
const width = Metrics.screen.width - 40;
const CartProduct = (props: Props) => {
  let formaters = new Intl.NumberFormat('us-US');
  const [show, setShow] = useState(true);
  const HideShow = () => {
    setShow(!show);
  };

  const Hide = () => {
    setShow(true);
  };
  return (
    <Card
      width={width}
      row
      height={75}
      br30
      marginV-10
      backgroundColor={Colors.white}>
      <View flex-1 br30 row>
        <View flex-1 row br30>
          <Image
            style={styles.images}
            resizeMode={'cover'}
            source={{uri: props.url}}
          />
        </View>
        {show ? (
          <View flex-3>
            <Text
              style={styles.font14}
              color={Colors.blueNavy}
              marginV-5
              marginL-10
              numberOfLines={1}>
              {props.title}
            </Text>
            <Text marginL-10 color={Colors.blueNavy}>
              {formaters.format(props.price)} đ
              <Text color={Colors.blueNavy}>
                {'   '}x{props.quantity}
              </Text>
            </Text>
            <View row spread>
              <Text marginL-10 marginV-5 color={Colors.blueNavy}>
                Thành Tiền:{' '}
                <Text color={Colors.redAlizarin} style={styles.fonts}>
                  {formaters.format(props.total)}
                </Text>
              </Text>
              <TouchableOpacity centerV onPress={HideShow}>
                <Text marginR-10 color={Colors.brownKabul50}>
                  Thêm{' >>'}{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <>
            <View flex-2>
              <Text
                style={styles.font14}
                color={Colors.blueNavy}
                marginV-5
                marginL-10
                numberOfLines={1}>
                {props.title}
              </Text>
              <Text numberOfLines={1} marginL-10 color={Colors.blueNavy}>
                {formaters.format(props.price)} đ
                <Text color={Colors.blueNavy}>
                  {'   '}x{props.quantity}
                </Text>
              </Text>
              <View row spread>
                <Text
                  numberOfLines={1}
                  marginL-10
                  marginV-5
                  color={Colors.blueNavy}>
                  Thành Tiền:{' '}
                  <Text color={Colors.redAlizarin} style={styles.fonts}>
                    {formaters.format(props.total)} đ
                  </Text>
                </Text>
              </View>
            </View>
            <View flex-2 row center>
              <View flex-1 center backgroundColor={Colors.black38} height={75}>
                <TouchableOpacity onPress={Hide}>
                  <Image source={Icons.home.edit} />
                </TouchableOpacity>
              </View>
              <View
                flex-1
                center
                backgroundColor={Colors.orangeCarrot08}
                height={75}
                style={styles.boders}>
                <TouchableOpacity onPress={Hide}>
                  <Image source={Icons.home.delete} />
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  font14: {
    fontSize: 14,
    fontWeight: '700',
  },
  fonts: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  boders: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  images: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default CartProduct;
