import { useFormik } from 'formik';

import AuthStore from '../../store/auth';

const useContainer = () => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: (userInfo) => {
      if (userInfo.login && userInfo.password) {
        AuthStore.login(userInfo);
      }
    },
  });

  return {
    formik
  };
};

export default useContainer;
