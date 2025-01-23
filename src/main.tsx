import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import store from './store'
import { Provider } from 'react-redux'
import { StoreProvider } from './lib'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>
)
