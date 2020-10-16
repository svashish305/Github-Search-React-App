export class API {
  static getUsers() {
      return fetch(`https://api.github.com/users`, {
          method: 'GET',
          headers: {
              'Accept': 'application/vnd.github.v3+json'
          }
      }).then(resp => resp.json())
      .catch(err => console.log(err))
  }

  static getUser(username) {
      return fetch(`https://api.github.com/users/${username}`, {
          method: 'GET',
          headers: {
              'Accept': 'application/vnd.github.v3+json'
          }
      }).then(resp => resp.json())
  }

  static getStarredReposOfUser(username) {
    return fetch(`https://api.github.com/users/${username}/starred`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    }).then(resp => resp.json())
  }
 
  static getReposOfUser(username) {
    return fetch(`https://api.github.com/users/${username}/repos`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    }).then(resp => resp.json())
  }

  static getRepoOfUser(username, reponame) {
    return fetch(`https://api.github.com/repos/${username}/${reponame}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    }).then(resp => resp.json())
  }

  static getCommitsOfRepo(username, reponame) {
    return fetch(`https://api.github.com/repos/${username}/${reponame}/commits`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    }).then(resp => resp.json())
  }

  static getIssuesOfRepo(username, reponame) {
    return fetch(`https://api.github.com/repos/${username}/${reponame}/issues`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    }).then(resp => resp.json())
  } 
}