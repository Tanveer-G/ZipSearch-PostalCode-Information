import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countryCode: 'IN',
  countryName: 'India',
  searchHistory: []
}

const zipSearchSlice = createSlice({
  name: 'zipsearch',
  initialState,
  reducers: {
    updateCountryCode: (state, action) => {
      state.countryCode = action.payload
    },
    updateCountryName: (state, action) => {
      state.countryName = action.payload
    },
    updateSearchHistory: (state, action) => {
      state.searchHistory.unshift(action.payload)
    },
    clearAllStoreData: (state) => {
      state.countryCode = 'IN'
      state.countryName = 'India'
      state.searchHistory = []
    }
  }
})

export const { updateCountryCode, updateCountryName, updateSearchHistory, clearAllStoreData } = zipSearchSlice.actions

export default zipSearchSlice.reducer