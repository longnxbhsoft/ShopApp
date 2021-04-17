import React from 'react';
import {View} from 'react-native-ui-lib';
import {Colors} from '../../assets';
import {Container, Header} from '../components';
import {ItemsProduct} from './components';
import {ProductList} from '../../domain';
import {FlatList, StyleSheet} from 'react-native';
import {DataProducts} from '../../untils/dummyData';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item}: {item: ProductList}) => {
    const gotoDetail = () => {
      navigation.navigate('Detail');
    };
    return (
      <ItemsProduct
        goToDetail={gotoDetail}
        name={item.title}
        percent={item.percent}
        discout={item.discount}
        price={item.price}
        url={item.url}
      />
    );
  };
  const renderKeyExtractor = (item: any, index: number) => index.toString();
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <Header home={true} homechild={true} />
      <View paddingH-31 paddingB-110>
        {/* <View centerV>
          <Text>Sản phẩm</Text>
        </View> */}
        <FlatList
          data={DataProducts}
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

export default HomeScreen;
