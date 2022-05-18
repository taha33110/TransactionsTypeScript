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

import {HeaderStyle} from './style';

const Header = () => {
  return (
    <View style={HeaderStyle.container}>
      <View style={HeaderStyle.textContainer}>
        <Text style={HeaderStyle.text}>Expense Tracker</Text>
      </View>
    </View>
  );
};

export default Header;
