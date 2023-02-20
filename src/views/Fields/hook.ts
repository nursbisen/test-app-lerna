import { useEffect } from 'react';
import { useFormik } from 'formik';

import store from '../../store';

const useContainer = () => {
  const formik = useFormik({
    initialValues: {
      list: store.fieldsStore.list,
    },
    enableReinitialize: true,
    onSubmit: () => {},
  });

  const handleLogout = () => {
    store.authStore.logout()
  };

  const isLoading = store.fieldsStore.status === 'loading';

  useEffect(() => {
    store.fieldsStore.getFields();
  }, []);
  
  return {
    formik,
    isLoading,
    handleLogout
  };
};

export default useContainer;
