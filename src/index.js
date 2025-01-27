import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext';
import {Auth0Provider} from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-mkkp3pdq3b14xta6.us.auth0.com"
  clientId="xjYZDnn0UjhKneoOgc1yZ8qAyjXgqQds"
  redirectUri={window.location.origin}
>
  <ShopContextProvider>
    <App />
   </ShopContextProvider>
   </Auth0Provider>
);


reportWebVitals();
