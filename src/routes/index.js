import Landing from "../components/layouts/landing";
import SignUp from "../components/users/signUp";
import SignIn from "../components/users/signIn";
import SignOut from "../components/users/signOut";

const landingRoutes = {
  path: "/",
  name: "Landing Page",
  component: Landing,
  children: null
};

const userAuthRoutes = {
  path: "/auth",
  name: "Auth",
  children: [
    {
      path: "/auth/sign-up",
      name: "New User",
      component: SignUp
    },
    {
      path: "/auth/sign-in",
      name: "Sign In",
      component: SignIn
    },
    {
      path: "/auth/sign-out",
      name: "Sign Out",
      component: SignOut
    }
  ]
};

export const landing = [landingRoutes];
export const auth = [userAuthRoutes];

export default [landingRoutes, userAuthRoutes];
