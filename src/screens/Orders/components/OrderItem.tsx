import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity, Image, View} from 'react-native-ui-lib';
import {Colors, Icons, Metrics} from '../../../assets';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {OrderList} from '../../../domain';

interface Props {
  orderHistory: [];
  id: string;
}
const width = Metrics.screen.width - 60;
const ItemsProduct = (props: Props) => {
  let formaters = new Intl.NumberFormat('us-US');
  const [show, setShow] = useState(false);
  const HideShow = () => {
    setShow(!show);
  };

  return (
    <View
      width={width}
      paddingV-20
      paddingH-30
      backgroundColor={Colors.blueDark10}
      br20>
      <View row spread centerV>
        <Text style={styles.fonts} numberOfLines={1}>
          Đơn hàng #{props.id}
        </Text>
        <TouchableOpacity onPress={HideShow}>
          {show ? (
            <Image source={Icons.home.up} />
          ) : (
            <Image source={Icons.home.down} />
          )}
        </TouchableOpacity>
      </View>
      {show &&
        props.orderHistory.map(({item}: {item: OrderList}) => {
          <View marginT-10>
            <View row spread marginV-7>
              <Text style={styles.font14}>{item.name}</Text>
              <Text style={styles.font14}>{formaters.format(item.price)}đ</Text>
            </View>
          </View>;
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  font14: {
    fontSize: 14,
    color: Colors.blueNavy,
  },
  fonts: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5,
    color: Colors.blueNavy,
  },
  boders: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default ItemsProduct;
