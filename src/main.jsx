// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import App from './components/App.jsx';
import './index.css';
import { SkeletonTheme } from 'react-loading-skeleton';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <SkeletonTheme baseColor="#d9d9d9" highlightColor="#b9b8b8">
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </SkeletonTheme>
);
