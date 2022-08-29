import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./app/app";
import "./app/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>
);
