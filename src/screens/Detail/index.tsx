import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity, View, Text, Image} from 'react-native-ui-lib';
import {Colors, Icons, Metrics} from '../../assets';
import {images} from '../../assets/Images';
import {ButtonAccept, Container} from '../components';

const DetailScreen = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <View flex-1 centerH paddingB-10>
        <View
          width={Metrics.screen.width}
          height={Metrics.screen.height / 2.6}
          backgroundColor={Colors.redAlizarin}
          style={styles.images}>
          <TouchableOpacity absL onPress={goBack}>
            <Image source={Icons.home.back} />
          </TouchableOpacity>
          <View flex-1 center>
            <Image resizeMode={'cover'} source={images.success} />
          </View>
        </View>
        <View flex-1 paddingB-14>
          <ScrollView style={styles.container}>
            <Text style={styles.fontSize19} numberOfLines={2}>
              Special combination of 3 scoop different with premium fruits such
              as KIWI and be, KIWI and be,KIWI and be{' '}
            </Text>
            <Text marginT-10>
              Giá: <Text color={Colors.orangeCarrot}>100,000đ</Text>
            </Text>
            <Text marginT-10>Phân loại: Xanh, đỏ, tím vàng</Text>
            <Text marginT-10>
              Tình trạng: <Text color={Colors.greenPine}>Còn hàng</Text>
            </Text>
            <Text marginT-10>
              Mô tả chi tiết: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả,
              được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem
              Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp
              in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn
              văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản
              này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin
              học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã
              được phổ biến trong những năm 1960 nhờ việc bán những bản giấy
              Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng
              trong các ứng dụng dàn trang, như Aldus PageMaker.
            </Text>
            <View height={80} marginT-15 row>
              <View center flex-1>
                <Text style={styles.fontSize16}>Đánh giá</Text>
                <Text marginT-10>50k</Text>
              </View>
              <View flex-1 center>
                <Text style={styles.fontSize16} numberOfLines={2}>
                  Thời gian giao hàng
                </Text>
                <Text marginT-10>3-4 ngày</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <ButtonAccept iconLeft={true} title={'Thêm vào giỏ hàng'} />
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
});

export default DetailScreen;
