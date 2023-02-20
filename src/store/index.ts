import { create } from 'mobx-persist';

import AuthStore from './auth';
import FieldsStore from './fields';

const hydrate = create({
  storage: localStorage,
  jsonify: true,
});

class RootStore {
  authStore = new AuthStore();
  fieldsStore = new FieldsStore();

  constructor() {
    hydrate('auth', this.authStore);
    hydrate('fields', this.fieldsStore);
  }
};

const store = new RootStore();

export default store;