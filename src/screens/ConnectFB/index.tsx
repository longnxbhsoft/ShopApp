/* eslint-disable react-native/no-inline-styles */
import CookieManager from '@react-native-community/cookies';
import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import WebView from 'react-native-webview';
import {Colors} from '../../assets';
import {Container} from '../components';

const FBScreen = () => {
  const [loading, setLoading] = useState(false);
  const navChange = (e: {loading: any; url: string}) => {
    console.log('e', e);
    setLoading(e.loading);
    if (e.url === 'https://www.facebook.com/') {
      CookieManager.getAll(true).then(res => {
        console.log('CookieManager.getAll =>', res);
        if (res) {
          console.log({res});
          // CookieManager.clearAll(false).then(res => {
          //   console.log('LoginScreen CookieManager.clearAll =>', res);
          // });
          CookieManager.get('https://www.facebook.com/');
          console.log(CookieManager.get('https://www.facebook.com/'));
        }
      });
    }
  };

  return (
    <Container
      backgroundColor={Colors.white}
      backgroundBody={Colors.white}
      barStyle="dark-content">
      <WebView
        cacheEnabled={false}
        ref={ref => (webView = ref)}
        source={{
          uri: 'https://www.facebook.com/',
        }}
        style={{marginTop: 20}}
        onNavigationStateChange={navChange}
        thirdPartyCookiesEnabled={true}
      />
      {loading && (
        <ActivityIndicator color={'blue'} style={{flex: 20}} size={'large'} />
      )}
    </Container>
  );
};

export default FBScreen;
