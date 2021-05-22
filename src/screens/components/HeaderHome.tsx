import React, {FC, memo, useCallback, useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native-ui-lib';
import {FlatList, StyleSheet, TextInput} from 'react-native';
import {Colors, Icons, Metrics} from '../../assets';
import {CategoriesList, HeaderList} from '../../domain';
import {useNavigation} from '@react-navigation/native';

export interface Props {
  homechild?: boolean;
  home?: boolean;
  cart?: boolean;
  isBack?: boolean;
  title?: string;
  delivery?: boolean;
  active?: number;
  all_category?: readonly CategoriesList[] | null | undefined;
  onChangeText?: (text: any) => void;
  parentCallback?: any;
  parentCallbacks?: any;
  showModal?: () => void;
}

const Header: FC<Props> = ({
  homechild,
  home,
  cart,
  title,
  isBack,
  delivery,
  active,
  all_category,
  onChangeText,
  parentCallback,
  parentCallbacks,
  showModal,
}) => {
  const [isSelect, setSelected] = useState('6078616beb81c312682e0b8c');

  const [search, setSearch] = useState(false);

  useEffect(() => {
    parentCallback(isSelect);
    parentCallbacks(search);
  });

  const renderItem = ({item}: {item: HeaderList}) => {
    const SelectCat = () => {
      if (item?._id) {
        setSelected(item._id);
      }
    };
    return (
      <TouchableOpacity center onPress={SelectCat} marginH-18>
        <Text
          color={isSelect === item._id ? Colors.orangeCarrot : Colors.blueNavy}>
          {item.name}
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
            <TouchableOpacity onPress={showModal}>
              <Image source={Icons.home.menu} />
            </TouchableOpacity>
            <Text style={styles.name}>
              Cheap<Text color={Colors.orangeCarrot}>Syn</Text>
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
                  <TextInput
                    onChangeText={onChangeText}
                    placeholder={'Enter search keyword...'}
                    placeholderTextColor={Colors.blueDark}
                    style={styles.colors}
                  />
                </View>
              </View>
            ) : (
              <View height={50} width={Metrics.screen.width} center>
                <FlatList<HeaderList>
                  data={all_category || []}
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
  colors: {
    color: Colors.blueDark,
  },
});

export default memo<Props>(Header);
