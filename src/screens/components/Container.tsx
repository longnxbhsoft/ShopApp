import React, {FC, memo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StyleSheet, StatusBarProps, StatusBar} from 'react-native';

interface Props {
  children: React.ReactNode;
  header?: React.ReactNode;
  backgroundBody?: string;
  safeBottom?: boolean;
  backgroundFooter?: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    height: 0,
  },
});

const Container: FC<Props & StatusBarProps> = ({
  children,
  header,
  backgroundBody,
  safeBottom,
  backgroundFooter,
  ...statusBarProps
}) => (
  <View style={styles.container}>
    <StatusBar {...statusBarProps} />
    {header || (
      <SafeAreaView
        edges={['right', 'left', 'top']}
        style={{backgroundColor: statusBarProps.backgroundColor}}
      />
    )}
    <SafeAreaView
      edges={['right', 'left']}
      style={[styles.container, {backgroundColor: backgroundBody}]}>
      {children}
    </SafeAreaView>
    {safeBottom && (
      <SafeAreaView
        edges={['right', 'left', 'bottom']}
        style={{backgroundColor: backgroundFooter || backgroundBody}}
      />
    )}
  </View>
);

export default memo<Props & StatusBarProps>(Container);
