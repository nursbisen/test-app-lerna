import { persist } from 'mobx-persist';
import { makeAutoObservable } from 'mobx';

import api from '../api';
import { FieldType } from '../types/fields';

import { FlowReturn } from './types';

class FieldsStore {
  @persist('list') list: FieldType[] = [];
  status: 'init' | 'loading' | 'success' | 'error' = 'init';

  constructor() {
    makeAutoObservable(this);
  }

  *getFields(): FlowReturn<typeof api.getFields> {
    try {
      this.status = 'loading';
      
      const response = yield api.getFields();

      this.list = response;
      this.status = 'success';
    } catch(e) {
      this.status = 'error';
    }
  }
};

export default FieldsStore;
