import React, {FC, memo, useCallback, useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native-ui-lib';
import {FlatList, StyleSheet, TextInput} from 'react-native';
import {Colors, Icons, Metrics} from '../../assets';
import {HeaderList} from '../../domain';
import {DataCategory} from '../../untils/dummyData';
import {useNavigation} from '@react-navigation/native';

export interface Props {
  homechild?: boolean;
  home?: boolean;
  cart?: boolean;
  isBack?: boolean;
  title?: string;
  delivery?: boolean;
  active?: number;
}

const Header: FC<Props> = ({
  homechild,
  home,
  cart,
  title,
  isBack,
  delivery,
  active,
}) => {
  const [isSelect, setSelected] = useState('1');

  const [search, setSearch] = useState(false);

  const renderItem = ({item}: {item: HeaderList}) => {
    const SelectCat = () => {
      if (item?.id) {
        setSelected(item.id);
      }
    };
    return (
      <TouchableOpacity center onPress={SelectCat} marginH-18>
        <Text
          color={isSelect === item.id ? Colors.orangeCarrot : Colors.blueNavy}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const navigation = useNavigation();

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderKeyExtractor = (item: any, index: number) => index.toString();

  const changeSearch = () => {
    setSearch(!search);
  };
  return (
    <View
      center
      paddingB-10
      paddingT-20
      width={Metrics.screen.width}
      style={styles.header}>
      {home && (
        <>
          <View
            height={35}
            width={Metrics.screen.width}
            centerV
            row
            paddingH-31
            spread>
            <Image source={Icons.home.menu} />
            <Text style={styles.name}>
              Shop<Text color={Colors.orangeCarrot}>Nix</Text>
            </Text>
            <TouchableOpacity onPress={changeSearch}>
              <Image source={search ? Icons.login.exit : Icons.home.search} />
            </TouchableOpacity>
          </View>
          {homechild &&
            (search ? (
              <View
                width={Metrics.screen.width}
                centerV
                paddingH-31
                height={50}
                row>
                <Image
                  tintColor={Colors.orangeCarrot}
                  source={Icons.home.search}
                />
                <View marginL-10>
                  <TextInput placeholder={'Nhập vào tự khoá tìm kiếm...'} />
                </View>
              </View>
            ) : (
              <View height={50} width={Metrics.screen.width} center>
                <FlatList<HeaderList>
                  data={DataCategory || []}
                  renderItem={renderItem}
                  keyExtractor={renderKeyExtractor}
                  horizontal={true}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            ))}
        </>
      )}
      {cart && (
        <View center marginB-10 row>
          <View flex-1 centerV>
            {isBack && (
              <TouchableOpacity marginL-31 onPress={onGoBack}>
                <Image source={Icons.home.back} />
              </TouchableOpacity>
            )}
          </View>
          <View flex-2 center>
            <Text style={styles.cart}>{title}</Text>
          </View>
          <View flex-1 />
        </View>
      )}
      {delivery && (
        <View width={Metrics.screen.width}>
          <View center marginB-10 row>
            <View flex-1 centerV>
              {isBack && (
                <TouchableOpacity marginL-31 onPress={onGoBack}>
                  <Image source={Icons.home.back} />
                </TouchableOpacity>
              )}
            </View>
            <View flex-2 center>
              <Text style={styles.cart}>{title}</Text>
            </View>
            <View flex-1 />
          </View>
          <View height={60} row spread paddingH-31 marginT-20>
            <View
              width={80}
              height={45}
              center
              backgroundColor={
                active === 1 ? Colors.orangeCarrot : Colors.white
              }
              br100>
              <Image
                tintColor={active === 1 ? Colors.white : Colors.orangeCarrot}
                source={Icons.home.location}
              />
            </View>
            <View
              width={80}
              height={45}
              center
              backgroundColor={
                active === 2 ? Colors.orangeCarrot : Colors.white
              }
              br100>
              <Image
                tintColor={active === 2 ? Colors.white : Colors.orangeCarrot}
                source={Icons.home.card}
              />
            </View>
            <View
              width={80}
              height={45}
              center
              backgroundColor={
                active === 3 ? Colors.orangeCarrot : Colors.white
              }
              br100>
              <Image
                tintColor={active === 3 ? Colors.white : Colors.orangeCarrot}
                source={Icons.home.delivery}
              />
            </View>
            <View
              width={80}
              height={45}
              center
              backgroundColor={
                active === 4 ? Colors.orangeCarrot : Colors.white
              }
              br100>
              <Image
                tintColor={active === 4 ? Colors.white : Colors.orangeCarrot}
                source={Icons.home.menu}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
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
  headerWidthBack: {
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cart: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.orangeCarrot,
  },
});

export default memo<Props>(Header);
