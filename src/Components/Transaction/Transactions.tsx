import React, {useEffect} from 'react';

import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';

import {styles} from './TransactionStyle';

import {useDispatch, useSelector} from 'react-redux';

import {del} from '../../Store/Slice';
export const Transactions = (props: {transactions: any}) => {
  const dispatch = useDispatch();

  let color: string;
  const id = props.transactions.id;
  // const tempId = id.map((e: any) => e.id);
  const sign = props.transactions.value > 0 ? '+' : '-';
  if (sign == '+') {
    color = 'green';
  } else {
    color = 'red';
  }

  function remove() {
    dispatch(del(id));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={remove}
        style={{...styles.deleteButtonStyle, alignSelf: 'flex-start'}}>
        <Text
          numberOfLines={1}
          style={{
            ...styles.description,
            fontStyle: 'normal',
            marginLeft: '35%',
            marginTop: '14%',
            fontSize: 20,
          }}>
          x{' '}
        </Text>
      </TouchableOpacity>
      <View style={styles.desxcriptionBox}>
        <Text
          style={{
            ...styles.description,
            fontSize: 10,
            marginLeft: '4%',
            marginTop: '5%',
          }}>
          {props.transactions.desc}
        </Text>
      </View>
      <View style={styles.amountBox}>
        <Text
          numberOfLines={1}
          style={{...styles.description, marginTop: '5%', marginLeft: '5%'}}>
          ${props.transactions.value}
        </Text>
      </View>
      <View style={{...styles.color, backgroundColor: color}}></View>
    </View>
  );
};
