import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: '80%',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    height: '12%',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '4%',
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
    borderEndWidth: 0.3,
    borderEndColor: 'grey',
  },
  amount: {
    alignSelf: 'center',
    fontSize: 20,
  },
  text: {
    fontSize: 25,
    marginLeft: '25%',
    marginBottom: '10%',
    fontStyle: 'italic',
  },
});
