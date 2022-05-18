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
import {HeadingTxtS} from './Style';

export const HeadingTxt = (props: {title: string}) => {
  return (
    <View>
      <Text style={HeadingTxtS.text}>{props.title}</Text>
      <View style={HeadingTxtS.line}></View>
    </View>
  );
};
