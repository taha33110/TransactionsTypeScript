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
import {styles} from './IncomeExpenseStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../../Store/store';
export const IncomeExpense = () => {
  const data = useSelector((state: RootState) => state.Add);
  const amount = data.map((e: any) => e.value);
  const income = amount
    .filter((t: number) => t > 0)
    .reduce((f: number, s: number) => (f += s), 0);
  const expense = amount
    .filter((e: number) => e < 0)
    .reduce((f: number, s: number) => (f += s), 0);
  const val = Math.abs(expense);
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.text}>Income</Text>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.amount}>${income}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.text}>Expense</Text>

        <View style={{flexDirection: 'column'}}>
          <Text style={styles.amount}>${val}</Text>
        </View>
      </View>
    </View>
  );
};
