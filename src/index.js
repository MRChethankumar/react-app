import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './AppRoutes';
import { ThemeProvider } from '@mui/styles';
import { theme } from './themes/MyTheme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRoutes/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
