import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {styles} from './ButtonStyle';

export const Button = (props: {title: string; onPress: any; disabled: any}) => {
  let color: string;
  if (props.disabled == true) {
    color = 'grey';
  } else {
    color = '#E0B0FF';
    //  backgroundColor:"#E0B0FF",
  }
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={{...styles.container, backgroundColor: color}}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};
