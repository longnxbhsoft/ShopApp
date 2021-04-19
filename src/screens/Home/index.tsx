import React, {useState} from 'react';
import {View} from 'react-native-ui-lib';
import {Colors} from '../../assets';
import {Container, Header} from '../components';
import {ItemsProduct} from './components';
import {CategoriesList, ProductList} from '../../domain';
import {FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getAllCategories, getAllProducts} from '../../reduxs/actions/Home.act';
import {connect} from 'react-redux';

const HomeScreen = (props: {
  getAllProducts: () => void;
  getAllCategories: () => void;
  all_products: readonly ProductList[] | null | undefined;
  all_categories: readonly CategoriesList[] | null | undefined;
}) => {
  const navigation = useNavigation();

  useState(() => {
    props.getAllProducts();
    props.getAllCategories();
  });
  const renderItem = ({item}: {item: ProductList}) => {
    const gotoDetail = () => {
      navigation.navigate('Detail');
    };
    return (
      <ItemsProduct
        goToDetail={gotoDetail}
        name={item.name}
        discout={item.price.originalPrice}
        price={item.price.salePrice}
        url={
          'https://api.cheapsyn.top/public/images/products/product_images_1618758579509.jpg'
        }
      />
    );
  };
  const renderKeyExtractor = (_item: any, index: number) => index.toString();
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Header
        home={true}
        homechild={true}
        all_category={props.all_categories}
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
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  products: {
    justifyContent: 'space-between',
  },
});

const mapStateToProps = (state: {all_products?: any; all_categories?: any}) => {
  const {all_products} = state;
  const {all_categories} = state;
  return {
    all_products: all_products,
    all_categories: all_categories,
  };
};

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  getAllProducts: () => dispatch(getAllProducts()),
  getAllCategories: () => dispatch(getAllCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
