import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./apollo/client";
import { store } from "./store";
import AppRouter from "./router/AppRouter";
import { ErrorBoundary } from "./ErrorBoundary";
import "./index.css";

const rootElem = document.getElementById("root");

ReactDOM.createRoot(rootElem!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ApolloProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
