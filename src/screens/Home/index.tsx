import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native-ui-lib';
import {Colors} from '../../assets';
import {Container, HeaderHome} from '../components';
import {ItemsProduct} from './components';
import {CategoriesList, ProductList} from '../../domain';
import {ActivityIndicator, Alert, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  getAllCategories,
  getAllProducts,
  addToCart,
  getInfo,
} from '../../reduxs/actions/Home.act';
import {connect} from 'react-redux';

const HomeScreen = (props: {
  getAllProducts: (
    arg0: string,
    arg1: string,
    arg2: number,
    arg3: number,
    arg4: number,
  ) => void;
  getAllCategories: () => void;
  getInfo: (arg0: any) => void;
  id: any;
  addToCart: (arg0: ProductList) => void;
  all_products: readonly ProductList[] | null | undefined;
  loading: any;
  all_categories: readonly CategoriesList[] | null | undefined;
}) => {
  const navigation = useNavigation();
  const [offset, setOffset] = useState(1);

  const [name, setName] = useState('');

  const [searchs, setSearch] = useState(false);

  const [category, setCate] = useState('6078616beb81c312682e0b8c');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [startPrice, setStart] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [stopPrice, setStop] = useState(0);

  const callbackFunction = (childData: React.SetStateAction<string>) => {
    setCate(childData);
  };

  const callbackFunctions = (
    childDatas: boolean | ((prevState: boolean) => boolean),
  ) => {
    setSearch(childDatas);
  };

  const search = useCallback((text: any) => {
    setName(text);
  }, []);

  useEffect(() => {
    props.getAllProducts(name, category, startPrice, stopPrice, offset);
    props.getAllCategories();
    if (searchs === false) {
      setName('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, searchs, name, startPrice, stopPrice, offset]);

  useEffect(() => {
    props.getInfo(props.id);
  }, [props]);

  const renderItem = ({item}: {item: ProductList}) => {
    const gotoDetail = () => {
      navigation.navigate('Detail', {
        id: item._id,
      });
    };

    const AddsToCart = () => {
      props.addToCart(item);
      Alert.alert('Messages', 'The product has been added to cart');
    };

    return (
      <ItemsProduct
        goToDetail={gotoDetail}
        name={item.name}
        discout={item.price.originalPrice}
        price={item.price.salePrice}
        url={item.images[0]}
        addCart={AddsToCart}
      />
    );
  };

  const count =
    props.all_products?.length !== undefined ? props.all_products?.length : 0;

  const getData = () => {
    if (!props.loading) {
      if (offset * 10 <= count) {
        setOffset(offset + 1);
      } else {
        setOffset(offset);
      }
    }
  };

  const renderFooter = () => {
    return (
      // Footer View with Loader
      <View style={styles.footer}>
        {props.loading ? (
          <ActivityIndicator color={Colors.orangeCarrot} />
        ) : null}
      </View>
    );
  };

  const renderKeyExtractor = (item: any, index: number) => index.toString();

  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <HeaderHome
        home={true}
        parentCallback={callbackFunction}
        parentCallbacks={callbackFunctions}
        homechild={true}
        all_category={props.all_categories}
        onChangeText={search}
      />
      <View paddingH-31 paddingB-110>
        <FlatList
          data={props.all_products}
          renderItem={renderItem}
          keyExtractor={renderKeyExtractor}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={styles.products}
          ListFooterComponent={renderFooter}
          onEndReached={getData}
          onEndReachedThreshold={0.2}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  products: {
    justifyContent: 'space-between',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const mapStateToProps = (state: {
  all_products?: any;
  all_categories?: any;
  loading: boolean;
  dataUser: any;
}) => {
  const {all_products} = state;
  const {all_categories} = state;
  const {loading} = state;
  const {dataUser} = state;
  return {
    all_products: all_products,
    all_categories: all_categories,
    loading: loading,
    id: dataUser,
  };
};

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  getAllProducts: (
    name: string,
    category: string,
    startPrice: number,
    stopPrice: number,
    offset: number,
  ) => dispatch(getAllProducts(name, category, startPrice, stopPrice, offset)),
  getAllCategories: () => dispatch(getAllCategories()),
  addToCart: (item: any) => dispatch(addToCart(item)),
  getInfo: (userId: string) => dispatch(getInfo(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
