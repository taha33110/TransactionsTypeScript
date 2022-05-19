import React, {useEffect} from 'react';

import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {RootState} from '../../Store/store';
import {AccountSummryStyle} from './AccountSummryStyle';
import {useSelector, useDispatch} from 'react-redux';
import {zero} from '../../Store/Slice';
export const AccountSummry = () => {
  const dispatch = useDispatch();
  const [temp, setTemp] = React.useState(0);
  const data = useSelector((state: RootState) => state.data);
  useEffect(() => {
    const amount = data.map((e: any) => e.value);
    const total = amount
      .reduce((acc: number, item: number) => (acc += item), 0)
      .toFixed(2);
    setTemp(total);

    const noAmount = () => {
      dispatch(zero(temp));
    };

    if (temp < 0) {
      noAmount();
      Alert.alert('sorry you dont have amount ');
    }
  });

  return (
    <View style={AccountSummryStyle.container}>
      <Text style={AccountSummryStyle.font}>Current Balance</Text>
      <Text style={{...AccountSummryStyle.font, fontStyle: 'normal'}}>
        ${temp}
      </Text>
    </View>
  );
};
