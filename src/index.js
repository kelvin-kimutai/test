import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
