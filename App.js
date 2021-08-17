/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { I18nManager, StatusBar } from 'react-native';
import { VacationProvider } from 'src/context/vacation.context';
import WindowStack from './src/lib/windowStack';


const App = () => {
  useEffect(() => { I18nManager.allowRTL(false); }, []);
  return (
    <VacationProvider>
      <StatusBar backgroundColor="#f1f1f1" barStyle="dark-content" animated />
      <WindowStack />
    </VacationProvider>
  );
};

export default App;
