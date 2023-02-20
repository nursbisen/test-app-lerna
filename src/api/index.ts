import { FieldType } from '../types/fields';
import { UserInfoType } from '../types/auth';

const DELAY = 1000;

// Данные для авторизации
const USER_INFO: UserInfoType = {
  login: 'admin',
  password: 'admin',
};

function getRandomNum() {
  return Math.random().toString().slice(2, 6)
};

function getRandomFields() {
  const fieldsCount = Math.floor(Math.random() * 10) + 1; // от 1 до 10
  
  return new Array(fieldsCount)
    .fill(null)
    .map((_) => ({
      key: `Test ${getRandomNum()}`,
      value: `Pravka ${getRandomNum()}`,
    }));
};


const api = {
  getFields: () => {  
    return new Promise<FieldType[]>((res) => {
      setTimeout(() => {
        res(getRandomFields());
      }, DELAY);
    });
  },

  auth: (userInfo: UserInfoType) => {
    return new Promise<boolean>((res, req) => {
      setTimeout(() => {
        if (userInfo.login === USER_INFO.login && userInfo.password === USER_INFO.password) {
          res(true);
        }

        req(false);
      }, DELAY);
    });
  },
};

export default api;