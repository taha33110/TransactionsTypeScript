import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PURGE} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState: any = {
  data: [],
};

interface data {
  id: number;
  desc: string;
  value: number;
}

export const TSlice = createSlice({
  name: 'Add',
  initialState,

  reducers: {
    addT: (state: any, action: PayloadAction<data>) => {
      state.data.push(action.payload);
    },
    del: (state: any, action: PayloadAction<any>) => {
      const test = state.data.filter((e: any) => e.id != action.payload);
      return {data: test};
    },

    zero: (state: any, action: PayloadAction<any>) => {
      state.data.pop(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addT, del, zero} = TSlice.actions;

export default TSlice.reducer;
