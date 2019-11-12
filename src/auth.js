class Auth {
  static authenticateToken(token){
    sessionStorage.setItem('token', token)
  }

  static isUserAuthenticated(){
    return sessionStorage.getItem('token') !== null
  }

  static getToken(){
    sessionStorage.getItem('token')
  }
}

export default Auth
