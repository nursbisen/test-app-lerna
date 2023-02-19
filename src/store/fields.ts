import { makeAutoObservable } from 'mobx';

import { FieldType } from '../types/fields';

class FieldsStore {
  list: FieldType[] = []

  constructor() {
    makeAutoObservable(this);
  }

  getFields() {
    this.list = getRandomFields();
  }
}

const store = new FieldsStore();

export default store;

// helpers

function getRandomNum() {
  return Math.random().toString().slice(2, 6)
}

function getRandomFields() {
  const fieldsCount = Math.floor(Math.random() * 10) + 1; // от 1 до 10
  
  return new Array(fieldsCount)
    .fill(null)
    .map((_) => ({
      key: `Test ${getRandomNum()}`,
      value: `Pravka ${getRandomNum()}`,
    }));
};
