/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {AccountSummry} from './src/Components/accountSummry/AccountSummry';
import {AddTransaction} from './src/Components/AddTransaction/AddTransaction';
import Header from './src/Components/Header/Header';
import {HeadingTxt} from './src/Components/HeadingTxt/HeadingTxt';
import {IncomeExpense} from './src/Components/IncomeExpense/IncomeExpense';
import {TransactionHIstory} from './src/Components/TransactionHistory/TrasactionHistory';
import {store} from './src/Store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './src/Store/store';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{flex: 1}}>
          <StatusBar />

          <Header />
          <HeadingTxt title={'hello and welcome to App'} />
          <AccountSummry />
          <IncomeExpense />
          <TransactionHIstory />
          <AddTransaction />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
