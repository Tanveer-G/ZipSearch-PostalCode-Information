import { createSlice } from '@reduxjs/toolkit';
import {defaultData} from '../../utilities/defaultData'

const initialState = {
  data: defaultData,
  loading: false,
  error: '',
};

const apiDataSlice = createSlice({
  name: 'apiData',
  initialState,
  
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    updateData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    updateError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearAllAPIData: (state) => {
      state.data = {}
      state.error = ''
    }
  },
});

export const { startLoading, updateData, updateError, clearAllAPIData } = apiDataSlice.actions;

export default apiDataSlice.reducer;