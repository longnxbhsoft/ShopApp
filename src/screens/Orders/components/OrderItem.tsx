import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity, Image, View} from 'react-native-ui-lib';
import {Colors, Icons, Metrics} from '../../../assets';

interface Props {
  product: [
    {
      name: string;
      price: {
        salePrice: number;
      };
      quantity: number;
    },
  ];
  _id: string;
}
const width = Metrics.screen.width - 60;
const ItemsProduct = (props: Props) => {
  const [show, setShow] = useState(false);
  const HideShow = () => {
    setShow(!show);
  };

  return (
    <View
      width={width}
      paddingV-20
      paddingH-30
      marginV-10
      backgroundColor={Colors.blueDark10}
      br20>
      <View row spread centerV>
        <Text style={styles.fonts} numberOfLines={1}>
          Đơn hàng #{props._id}
        </Text>
        <TouchableOpacity center style={styles.button} onPress={HideShow}>
          {show ? (
            <Image source={Icons.home.up} />
          ) : (
            <Image source={Icons.home.down} />
          )}
        </TouchableOpacity>
      </View>
      {show &&
        props.product.map(items => {
          return (
            <View marginT-10>
              <View spread marginV-7 paddingB-10 style={styles.borderBottom}>
                <Text style={styles.font14}>
                  Tên sản phẩm: {items !== undefined ? items.name : null}
                </Text>
                <Text marginV-10 style={styles.font14}>
                  Giá: {items !== undefined ? items.price.salePrice : null}đ
                </Text>
                <Text style={styles.font14}>
                  Số lượng: {items !== undefined ? items.quantity : null}
                </Text>
              </View>
            </View>
          );
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
  borderBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.blueNavy,
  },
  button: {
    width: 40,
    height: 40,
  },
});

export default ItemsProduct;
