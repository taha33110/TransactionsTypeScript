import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  ListRenderItem,
} from 'react-native';
import {HeadingTxt} from '../HeadingTxt/HeadingTxt';
import {Transactions} from '../Transaction/Transactions';
import {styles} from './TransactionHistoryStyle';
import {RootState} from '../../Store/store';
import {useSelector, useDispatch} from 'react-redux';

export const TransactionHIstory = () => {
  const data = useSelector((state: RootState) => state.data);
  console.log({data});
  return (
    <View style={styles.container}>
      <HeadingTxt title="Transaction History" />

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={index => index.id}
        renderItem={({item}) => (
          <>
            <Transactions transactions={item} />
          </>
        )}
      />
      {/*  */}
    </View>
  );
};
