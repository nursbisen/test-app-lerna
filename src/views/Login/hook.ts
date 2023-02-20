import { useFormik } from 'formik';

import store from '../../store';

const useContainer = () => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: (userInfo) => {
      if (userInfo.login && userInfo.password) {
        store.authStore.login(userInfo);
      }
    },
  });

  const isLoading = store.authStore.status === 'loading';

  return {
    formik,
    isLoading
  };
};

export default useContainer;
