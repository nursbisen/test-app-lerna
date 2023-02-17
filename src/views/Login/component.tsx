import { FormikProvider } from 'formik';
import { observer } from 'mobx-react-lite';

import { InputField, SubmitButton } from '../../components/formik';

import useContainer from './hook';

const Login = () => {
  const { formik } = useContainer();

  return (
    <div className="w-full mt-40 flex justify-center">
      <div className="w-[360px] rounded-2xl bg-white shadow-2xl border-none px-7 py-6 pb-8 flex flex-col gap-6 items-center">
        <h1 className="mb-2 text-gray-700 text-xl font-bold">Авторизация</h1>
        <FormikProvider value={formik}>
          <InputField name="login" label="Логин" />
          <InputField type="password" name="password" label="Пароль" />
          <SubmitButton className="w-52 mt-1">Войти</SubmitButton>
        </FormikProvider>
      </div>
    </div>
  );
};

export default observer(Login);