import React from 'react';

import {StyleSheet} from 'react-native';

export const AccountSummryStyle = StyleSheet.create({
  container: {
    width: '80%',

    alignSelf: 'center',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    borderEndWidth: 0.3,
    borderBottomWidth: 0.2,
    marginTop: '2%',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  font: {
    fontSize: 20,
    fontStyle: 'italic',
  },
});
