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

  const isLoading = AuthStore.status === 'loading';

  return {
    formik,
    isLoading
  };
};

export default useContainer;
