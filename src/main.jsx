import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react';
import { Provider } from 'react-redux'
import store from './app/store.js'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App.jsx'
import './index.css'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <Analytics />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
