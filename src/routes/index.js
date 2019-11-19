import Landing from "../components/layouts/landing";
import SignUp from "../components/users/signUp";
import SignIn from "../components/users/signIn";
import Profile from "../components/users/profile";

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
    }
  ]
};

const userRoutes = {
  path: "/user/profile",
  name: "profile",
  component: Profile,
  children: null
};

export const landing = [landingRoutes];
export const auth = [userAuthRoutes];
export const user = [userRoutes];

export default [
  landingRoutes,
  userAuthRoutes,
  userRoutes
];
