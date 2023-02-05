import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AuthProvider} from './hooks/AuthContext'
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
        <ChakraProvider>
          <Router>
            <AuthProvider>
              <App />
            </AuthProvider>
          </Router>
        </ChakraProvider>
  </React.StrictMode>
);


