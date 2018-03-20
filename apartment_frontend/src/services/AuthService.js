import decode from 'jwt-decode';
export default class AuthService {
  constructor(domain) {
    this.domain = domain || 'http://localhost:3001'
    this.fetch = this.fetch.bind(this)
    this.login = this.login.bind(this)
    this.getUserId = this.getUserId.bind(this)
  }

  login(email, password) {
    return this.fetch(`${this.domain}/user_token`, {
      method: 'POST',
      body: JSON.stringify({
        auth: {
          email,
          password
        }
      })
    }).then(res => {
      this.setToken(res.jwt)
      return Promise.resolve(res);
    })
  }

  loggedIn() {
    const token = this.getToken()
    return !!token && !this.isTokenExpired(token)
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      }
      else {
        return false;
      }
    }
    catch (err) {
      return false;
    }
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  logout() {
    localStorage.removeItem('id_token');
  }

  getUserId() {
    const token = decode(this.getToken());
    return token.sub
  }

  fetch(url, options) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer' + this.getToken()
    }

    return fetch(url, {
      headers,
      ...options
    })
    .then(this._checkStatus)
    .then(response => response.json())
  }

  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
}
