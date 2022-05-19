import React, {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {styles} from './IncomeExpenseStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../../Store/store';
export const IncomeExpense = () => {
  const data = useSelector((state: RootState) => state.data);
  const [tempIn, setTempIn] = React.useState(0);
  const [tempEx, setTempEx] = React.useState(0);
  console.log(data);
  useEffect(() => {
    const amount = data.map((e: any) => e.value);
    const income = amount
      .filter((t: number) => t > 0)
      .reduce((f: number, s: number) => (f += s), 0);
    setTempIn(income);

    const expense = amount
      .filter((e: number) => e < 0)
      .reduce((f: number, s: number) => (f += s), 0);
    const val = Math.abs(expense);
    setTempEx(val);
  });

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.text}>Income</Text>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.amount}>${tempIn}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.text}>Expense</Text>

        <View style={{flexDirection: 'column'}}>
          <Text style={styles.amount}>${tempEx}</Text>
        </View>
      </View>
    </View>
  );
};
