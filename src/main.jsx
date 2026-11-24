
import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client/react";
import client from "./graphql/client";
import App from "./App.jsx";
import "./index.css";

async function iniciarAplicacion() {
  const { worker } = await import("./mocks/browser");

  await worker.start({
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`
    },
    onUnhandledRequest: "bypass"
  });

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  );
}

iniciarAplicacion();
