import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/provider";
import { extendTheme } from "@chakra-ui/theme-utils";
import { BrowserRouter } from "react-router-dom";
import './index.css';

const styles = {
  global: (props) => ({
    body: {
      bg: "#f5f5f5",
      color: "black"
    }
  }) 
}

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendTheme({ styles, config})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

