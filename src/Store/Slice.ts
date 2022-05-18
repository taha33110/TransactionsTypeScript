import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import produce from 'immer';

const initialState: any = [];

interface data {
  id: number;
  desc: string;
  value: number;
}
// const nextState = produce(baseS, (draftState) => {
//   // "mutate" the draft array
//   draftState.push(state);
//   // "mutate" the nested state
//   draftState[1].done = true;
// });

export const TSlice = createSlice({
  name: 'Add',
  initialState,
  reducers: {
    addT: (state: any, action: PayloadAction<data>) => {
      state.push(action.payload);
      // return async (state: any) => {
      //   try {
      //     await AsyncStorage.setItem('@storage_Key', state);
      //   } catch (e) {
      //     // saving error
      //   }
      // };
    },
    del: (state: any, action: PayloadAction<any>) => {
      return state.filter((e: any) => e.id !== action.payload);
    },

    zero: (state: any, action: PayloadAction<any>) => {
      state.pop(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addT, del, zero} = TSlice.actions;

export default TSlice.reducer;
