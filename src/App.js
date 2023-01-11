import AppRoutes from "./routes/publicRoutes";
import ErrorFallback from "./fallbacks/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./fallbacks/Loading";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "./components/Layout";
import ContextProviders from "./context";
import "./App.scss";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Suspense fallback={<Loading />}>
              <ContextProviders>
                <Layout>
                  <AppRoutes />
                </Layout>
              </ContextProviders>
            </Suspense>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
