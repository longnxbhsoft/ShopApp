import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import {TouchableOpacity, View, Text, Image} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {Colors, Icons, Metrics} from '../../assets';
import {ButtonAccept, Container, Loader} from '../components';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {addToCartDetail, getDetail} from '../../reduxs/actions/Home.act';

const DetailScreen = (props: {
  getDetail: (arg0: any) => void;
  route: {params: {id: any}};
  detail: {
    _id: any;
    name:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    images: {src: any}[] | undefined;
    price: {salePrice: number | bigint} | undefined;
    attributes:
      | {
          color:
            | string
            | number
            | boolean
            | {}
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactNodeArray
            | React.ReactPortal
            | null
            | undefined;
          review:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          deliveryTime:
            | string
            | number
            | boolean
            | {}
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactNodeArray
            | React.ReactPortal
            | null
            | undefined;
        }
      | undefined;
    quantity: number;
    description:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  };
  addCart: (arg0: {
    _id: any;
    name: any;
    images: {src: any};
    price: any;
  }) => void;
  loading: any;
}) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  useState(() => {
    props.getDetail(props.route.params.id);
  });

  const item = {
    _id: props.detail._id,
    name: props.detail.name,
    images: {
      src:
        props.detail.images !== undefined
          ? props.detail.images[0].src
          : 'https://afdublin.extranet-aec.com/img/empty-cart.png',
    },
    price: props.detail.price,
  };

  const addCarts = () => {
    props.addCart(item);
    Alert.alert('Messages', 'The product has been added to cart');
  };

  let formaters = new Intl.NumberFormat('us-US');
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Loader loading={props.loading} />
      <View flex-1 centerH paddingB-10>
        <View
          width={Metrics.screen.width}
          height={Metrics.screen.height / 2.6}
          backgroundColor={Colors.redAlizarin}
          style={styles.images}>
          <TouchableOpacity absL marginL-10 marginT-10 onPress={goBack}>
            <Image source={Icons.home.back} />
          </TouchableOpacity>
          <View flex-1 center>
            <Swiper
              loop
              autoplay
              autoplayTimeout={5}
              paginationStyle={styles.image}
              activeDot={<View style={styles.active} />}
              dot={<View style={styles.inActive} />}>
              {props.detail.images !== undefined ? (
                props.detail.images.map((items: {src: any}) => {
                  return (
                    <Image
                      source={{uri: items.src}}
                      style={styles.image}
                      resizeMode={'cover'}
                    />
                  );
                })
              ) : (
                <View />
              )}
            </Swiper>
          </View>
        </View>
        <View flex-1 paddingB-14>
          <ScrollView style={styles.container}>
            <Text style={styles.fontSize19} numberOfLines={2}>
              {props.detail.name}
            </Text>
            <Text marginT-10>
              Price:{' '}
              <Text color={Colors.orangeCarrot}>
                {formaters.format(
                  props.detail.price !== undefined
                    ? props.detail.price.salePrice
                    : 0,
                )}{' '}
                đ
              </Text>
            </Text>
            <Text marginT-10>
              Category:{' '}
              {props.detail.attributes !== undefined
                ? props.detail.attributes.color
                : null}
            </Text>
            <Text marginT-10>
              Status:{' '}
              {props.detail.quantity > 0 ? (
                <Text color={Colors.greenPine}>Stocking</Text>
              ) : (
                <Text color={Colors.redAlizarin}>Out of stock</Text>
              )}
            </Text>
            <Text marginT-10>{props.detail.description}</Text>
            <View height={80} marginT-15 row>
              <View center flex-1>
                <Text style={styles.fontSize16}>Review</Text>
                <Text marginT-10>
                  {props.detail.attributes !== undefined
                    ? props.detail.attributes.review
                    : null}
                </Text>
              </View>
              <View flex-1 center>
                <Text style={styles.fontSize16} numberOfLines={2}>
                  Delivery time
                </Text>
                <Text marginT-10>
                  {props.detail.attributes !== undefined
                    ? props.detail.attributes.deliveryTime
                    : null}{' '}
                  Days
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <ButtonAccept
          onPress={addCarts}
          iconLeft={true}
          title={'Thêm vào giỏ hàng'}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  fontSize19: {
    fontSize: 19,
    fontWeight: '500',
  },
  fontSize16: {
    fontSize: 15,
    fontWeight: '500',
  },
  images: {
    shadowColor: Colors.greyDrank,
    shadowOffset: {
      width: 1,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Colors.white,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  container: {
    paddingTop: 15,
    paddingHorizontal: 16,
  },
  active: {
    backgroundColor: Colors.orangeCarrot,
    width: 16,
    height: 4,
    borderRadius: 2,
    marginLeft: 4,
    marginRight: 4,
  },
  inActive: {
    backgroundColor: Colors.white,
    width: 8,
    height: 4,
    borderRadius: 2,
    marginLeft: 4,
    marginRight: 4,
  },
  customImage: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
});

const mapStateToProps = (state: {detail?: any; loading: boolean}) => {
  const {detail} = state;
  const {loading} = state;
  return {
    detail: detail,
    loading: loading,
  };
};

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  getDetail: (id: string) => dispatch(getDetail(id)),
  addCart: (item: any) => dispatch(addToCartDetail(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
