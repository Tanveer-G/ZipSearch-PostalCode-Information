import { configureStore } from '@reduxjs/toolkit';
import zipSearchSlice from './slices/zipSearchSlice'
import apiDataReducer from './slices/apiDataSlice';
export default configureStore({
  reducer: {
    zipsearch: zipSearchSlice,
    apiData: apiDataReducer,
  },
});
