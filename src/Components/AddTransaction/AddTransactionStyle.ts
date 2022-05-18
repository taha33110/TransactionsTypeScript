import React from 'react';

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '30%',

    alignSelf: 'center',
  },
  input: {
    width: '80%',
    borderBottomColor: 'grey',
    borderEndColor: 'grey',
    height: '19%',
    alignSelf: 'center',
    borderWidth: 0.3,
    borderRadius: 7,
    paddingLeft: '2%',
  },
  field: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    width: '100%',
    justifyContent: 'flex-start',

    height: '63%',
  },
  text: {
    fontSize: 20,
    marginTop: '3%',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: '1%',
  },
});
