import { Suspense } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RootComponent } from "./components/layouts/root-component";
import FxErrorBoundary, {
  RouteErrorBoundary,
} from "./core/error-handling/error-boundary";
import OpenRouteLayout from "./components/layouts/open-route-layout";
import { store } from "./store-management/store-creation";
import { injectStore } from "./inject-store";
import { Provider } from "react-redux";
import AppPreloader from "./components/shared/app-preloader";
import PageNotFound from "./components/pages/page-not-found";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={<RootComponent />}
        lazy={() => import("./core/startup/load-initial-data")}
        errorElement={<RouteErrorBoundary />}
      >
        <Route path="*" element={<PageNotFound />} />
        <Route
          element={<OpenRouteLayout />}
          errorElement={<RouteErrorBoundary />}
        >
          <Route index element={<div>Index Element</div>} />
          <Route path="/login" element={<div>login</div>} />
          <Route path="/verify-identity" element={<div>verify-identity</div>} />
          <Route path="/forgot-password" element={<div>forgot-password</div>} />
          <Route path="/reset-password" element={<div>reset-password</div>} />
        </Route>
      </Route>
    </>
  )
);

function App() {
  injectStore(store);

  return (
    <Provider store={store}>
      <FxErrorBoundary>
        <Suspense fallback={<AppPreloader />}>
          <RouterProvider router={router} />
        </Suspense>
      </FxErrorBoundary>
    </Provider>
  );
}

export default App;
