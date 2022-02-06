import axios from 'axios';

const API_URL = 'https://webapi.emlakofisimden.com/api/Auth/';
class AuthService {
  // eslint-disable-next-line class-methods-use-this
  login(CellPhone, Password) {
    console.log(CellPhone);
    console.log(Password);
    return axios.post(`${API_URL}login`, {
      CellPhone,
      Password
    });
  }

  // eslint-disable-next-line class-methods-use-this
  loginWithLicenceId(CellPhone, Password, LicenceId) {
    return axios
      .post(`${API_URL}login?licenceId=${LicenceId}`, {
        CellPhone,
        Password
      })
      .then((response) => {
        if (response.data.Data.Token) {
          localStorage.setItem('token', JSON.stringify(response.data.Data.Token));
        }
        return response.data;
      });
  }

  // eslint-disable-next-line class-methods-use-this
  logout() {
    localStorage.removeItem('token');
  }

  // eslint-disable-next-line class-methods-use-this
  register(cellPhone, titleEn, titleTr, firstName, lastName, password) {
    return axios.post(`${API_URL}register`, {
      cellPhone,
      titleEn,
      titleTr,
      firstName,
      lastName,
      password
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('token'));
  }
}
export default new AuthService();