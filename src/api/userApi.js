class userApi {
  static signupUser(){
    return fetch(`api`).then(response => {
      return response.json()
    }).catch(error => {
      return error;
    })
  }
}

export default userApi
