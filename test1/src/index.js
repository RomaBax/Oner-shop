import React from 'react';
import {createRoot} from 'react-dom/client'
import App from  "./components/App/App";
import {BrowserRouter} from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react'



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <React.StrictMode>
  <ChakraProvider>
    <App/>
  </ChakraProvider>
  </React.StrictMode>
  </BrowserRouter>
);


