import Landing from '../components/layouts/landing'
import SignUp from '../components/users/signUp'

const landingRoutes = {
  path: "/",
  name: "Landing Page",
  component: Landing,
  children: null
}

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
      //component: SignIn
    }
  ]
}

export const landing = [landingRoutes]
export const auth = [userAuthRoutes]

export default [
  landingRoutes,
  userAuthRoutes
]
