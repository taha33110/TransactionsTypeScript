import React from 'react';

import {
  Alert,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {Button} from '../Button/Button';
import {HeadingTxt} from '../HeadingTxt/HeadingTxt';
import {styles} from './AddTransactionStyle';
import {useDispatch} from 'react-redux';
import {addT} from '../../Store/Slice';
export const AddTransaction = () => {
  const [salary, setSalary] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const dispatch = useDispatch();
  function handleSalary(e: string) {
    setSalary(e);
  }

  function handleAmount(num: any) {
    if (!validNum.test(num)) {
      setAmount(num);
      setDisabled(true);
    } else {
      setAmount(num);

      setDisabled(false);
    }
  }
  function Trans() {
    if (salary == '' || amount == '') {
      Alert.alert('write Description and Amount');
    } else {
      dispatch(addT({id: Date.now(), desc: salary, value: parseInt(amount)}));
      setAmount(''), setSalary(''), setDisabled(true);
    }
  }
  const validNum = new RegExp(/^(\-?){1}([0-9]){1,}$/);

  return (
    <View style={styles.container}>
      <HeadingTxt title="Add Transaction" />
      <View style={styles.field}>
        <Text style={styles.text}>Add Description</Text>
        <TextInput
          value={salary}
          onChangeText={handleSalary}
          placeholder="Example 'Salary'"
          style={styles.input}
        />
        <Text style={styles.text}>Transaction Amount </Text>
        <TextInput
          keyboardType="number-pad"
          value={amount}
          onChangeText={handleAmount}
          placeholder="Example '123'"
          style={styles.input}
          //   onBlur={() => {}}
        />
      </View>

      <Button
        disabled={disabled}
        onPress={() => Trans()}
        title="Add transaction"
      />
    </View>
  );
};
