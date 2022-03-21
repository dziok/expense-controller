import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { ThemeProvider } from './theme';
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <App />
      </ThemeProvider>


    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

