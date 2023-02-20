import { useEffect } from 'react';
import { useFormik } from 'formik';

import authStore from '../../store/auth';
import FieldsStore from '../../store/fields';

const useContainer = () => {
  const formik = useFormik({
    initialValues: {
      list: FieldsStore.list,
    },
    enableReinitialize: true,
    onSubmit: () => {},
  });

  const handleLogout = () => {
    authStore.logout()
  };

  const isLoading = FieldsStore.status === 'loading';

  useEffect(() => {
    FieldsStore.getFields();
  }, []);
  
  return {
    formik,
    isLoading,
    handleLogout
  };
};

export default useContainer;
