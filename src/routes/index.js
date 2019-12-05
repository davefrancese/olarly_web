import Landing from "../components/layouts/landing";
import SignUp from "../components/users/signUp";
import SignIn from "../components/users/signIn";
import Profile from "../components/users/profile";
import Register from "../components/teacher/register/register";

import { Layout as LayoutIcon } from "react-feather";

//Teacher
import Tasks from "../components/teacher/tasks";

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

const teacherRoutes = {
  path: "/dashboard",
  name: "Dashboard",
  icon: LayoutIcon,
  children: [
    {
      path: "/dashboard/tasks",
      name: "Tasks",
      component: Tasks
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    }
  ]
};

export const landing = [landingRoutes];
export const auth = [userAuthRoutes];
export const teacher = [teacherRoutes];

export default [landingRoutes, userAuthRoutes, teacherRoutes];
