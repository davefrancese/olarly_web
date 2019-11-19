class Auth {
  //I am just loopnig through headers here that is all
  //in our reducers or actions we can now just call processHead and pass
  //it an action oh and ers for head..ers hehehe (ps method is at bottom)

  //also in security - we are not really doing this now but you may wonder why
  //I am naming http - ptth. This is more just to make you think ahhh makes sense
  //if an attacker is trying to force his (or her) way in and we return a Thanks for the request but those
  //credentials are invalid = this tells that nice attacker that there is data there and to keep trying
  //so best to return things like 404 or page not found or some shit like that

  static authenticateToken(ptth_cred){
    for(var http of ptth_cred.headers.entries()){
      sessionStorage.setItem(`${http[0]}`, `${http[1]}`)
    }
  }

  //dave, we can refactor this even more take a stab if you want. hint make another
  //helper class somewhere else - don't re write the logic but notice how each static
  //method is sort of repeating itself

  static isUserAuthenticated(ptth_cred_check){
    let client_ptth_cred = []
    for(var http of ptth_cred_check.headers.entries()){
      client_ptth_cred.push(sessionStorage.getItem(`${http[0]}`))
    }
    return client_ptth_cred //I bet this breaks
  }

  static deauthenticateUser(ptth_cred_delete){
    for(var http of ptth_cred_delete.headers.entries()){
      sessionStorage.removeItem(`${http[0]}`)
    }
  }

  static getToken(ptth_cred_retrieve){
    let client_ptth_cred = []
    //getToken and isUserAuth is honestly doing the same thing we should evaluate this
    for(var http of ptth_cred_retrieve.headers.entries()){
      client_ptth_cred.push(sessionStorage.getItem(`${http[0]}`))
    }
    return client_ptth_cred
  }

  static processHead(ers,action) {
    switch(action){
      case 'SIGN_UP':
       this.authenticateToken(ers)
      case 'SIGN_IN':
       this.isUserAuthenticated(ers)
      case 'SIGN_OUT':
       this.deauthenticateUser(ers)
    }
  }


}

export default Auth
