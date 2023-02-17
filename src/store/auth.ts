import { action, makeObservable, observable } from 'mobx';

import { UserInfoType } from './../types.ts/auth';

// Данные для авторизации
const USER_INFO: UserInfoType = {
  login: 'admin',
  password: 'admin',
};

// Первый опыт на Mobx :)

class Auth {
  isAuthorized = false;

  constructor() {
    makeObservable(
      this,
      {
        isAuthorized: observable,
        login: action,
        logout: action,
      },
      {
        autoBind: true,
      },
    );
  }

  login(userInfo: UserInfoType) {
    if (userInfo.login === USER_INFO.login && userInfo.password === USER_INFO.password) {
      this.isAuthorized = true;
    }
  }
  
  logout() {
    this.isAuthorized = false;
  }

};

const store = new Auth();

export default store;