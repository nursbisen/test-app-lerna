import { persist } from 'mobx-persist';
import { makeAutoObservable } from 'mobx';

import api from '../api';
import { UserInfoType } from '../types/auth';

import { FlowReturn } from './types';

// Первый опыт на Mobx :)

class AuthStore {
  @persist isAuthorized = false;
  status: 'init' | 'loading' | 'success' | 'error' = 'init';

  constructor() {
    makeAutoObservable(this);
  }

  *login(userInfo: UserInfoType): FlowReturn<typeof api.auth> {
    try {
      this.status = 'loading';

      const response = yield api.auth(userInfo);
      
      this.isAuthorized = response;
      this.status = 'success';
    } catch(e) {
      this.status = 'error';
    }
  }
  
  logout() {
    this.isAuthorized = false;
  }

};

export default AuthStore;