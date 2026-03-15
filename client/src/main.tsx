import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./apollo/client";
import { persistor, store } from "./store";
import AppRouter from "./router/AppRouter";
import { ErrorBoundary } from "./ErrorBoundary";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/loading/loader";

const rootElem = document.getElementById("root");

ReactDOM.createRoot(rootElem!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Provider store={store}>
          {/* PersistGate ensures Redux state is rehydrated before rendering the router */}
          <PersistGate loading={<Loader />} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
      </ApolloProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
