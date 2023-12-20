import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n';
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
        {/* <I18nextProvider i18n={i18n}> */}
          <App />
        {/* </I18nextProvider> */}
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
