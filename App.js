import React, {useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import CrsNavigation from './src/config/CrsNavigation';
import store from './src/store';
import { Provider } from 'react-redux';
import {Root} from 'native-base';
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Provider store={store}>
        <Root>
          <CrsNavigation />
        </Root>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
