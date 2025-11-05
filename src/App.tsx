

import { lazy, Suspense } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootComponent from "./components/layouts/root-component";
import FxErrorBoundary, {
  RouteErrorBoundary,
} from "./core/error-handling/error-boundary";
import OauthRouteLayout from "./components/layouts/oauth-route-layout";
import { store } from "./store-management/store-creation";
import { injectStore } from "./inject-store";
import { Provider } from "react-redux";
import AppPreloader from "./components/shared/app-preloader";
import PageNotFound from "./components/pages/page-not-found";
import AppCoreLayout from "./components/layouts/app-core-layout";
import ProfileCoreLayout from "./components/layouts/profile-core-layout";
import AdminCoreLayout from "./components/layouts/admin-core-layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sidebarAdminConstants } from "./core/constants/profile-constants";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { appGoogleId } from "./core/constants/common-constants";

const Authentication = lazy(
  () => import("@/features/common/identity/oauth/authentication")
);
const LinkedinCallback = lazy(
  () => import("@/features/common/identity/oauth/callback-linkedin")
);
const Register = lazy(
  () => import("@/features/common/identity/oauth/register")
);
const ForgotPassword = lazy(
  () => import("@/features/common/identity/oauth/forgot-password")
);
const ResetPassword = lazy(
  () => import("@/features/common/identity/oauth/reset-password")
);
const VerifyIdentity = lazy(
  () => import("@/features/common/identity/oauth/verify-identity")
);
const VerifyEmail = lazy(
  () => import("@/features/common/identity/oauth/verify-email")
);

const Profile = lazy(
  () => import("@/features/common/identity/account/profile")
);

const ProfileManagement = lazy(
  () => import("@/features/admin/profile/profile-management")
);
const Category = lazy(
  () => import("@/features/admin/category/category")
);
const BenefitManagement = lazy(
  () => import("@/features/admin/benefits/benefits-management")
);
const Comments = lazy(
  () => import("@/features/admin/comments/comments")
);
const BenefitDataGrid = lazy(
  () => import("@/features/management/benefit/benefit-data-grid")
);
const BenefitPersistComponent = lazy(
  () => import("@/features/management/benefit/benefit-persist-component")
);
const Home = lazy(() => import("@/features/common/home/home"));
const About = lazy(() => import("@/components/pages/about"));
const Team = lazy(() => import("@/components/pages/team"));

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
          path="/"
          element={<AppCoreLayout />}
          errorElement={<RouteErrorBoundary />}
        >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="all-prestation" element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
            
          <Route
            path="/admin"
            element={<AdminCoreLayout/>}
            errorElement={<RouteErrorBoundary />}
          >
            <Route index element={<Home />} />
            <Route path={sidebarAdminConstants.PROFILE} element={<ProfileManagement />} />
            <Route path={sidebarAdminConstants.CATEGORY} element={<Category />} />
            <Route path={sidebarAdminConstants.BENEFITS} element={<BenefitManagement />} />
            <Route path={sidebarAdminConstants.COMMENTS} element={<Comments />} />
          </Route>
          <Route
            path="/me"
            element={<ProfileCoreLayout />}
            errorElement={<RouteErrorBoundary />}
          >
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="benefits" element={<BenefitDataGrid />} />
            <Route path="benefit/edit/:idBenefit" element={<BenefitPersistComponent />} />
            <Route path="booking" element={<Register />} />
            <Route path="messages" element={<Category />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
        </Route>
        <Route
          path="/oauth"
          element={<OauthRouteLayout />}
          errorElement={<RouteErrorBoundary />}
        >
          <Route path="login" element={<GoogleOAuthProvider clientId={appGoogleId}><Authentication /></GoogleOAuthProvider>} />
          <Route path="register" element={<Register />} />
          <Route path="linkedin-callback" element={<LinkedinCallback />} />
          <Route path="verify-identity" element={<VerifyIdentity />} />
          <Route path="verify-registration" element={<VerifyEmail />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
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
          <ToastContainer />
        </Suspense>
      </FxErrorBoundary>
    </Provider>
  );
}

export default App;
