import { useEffect } from 'react';
import { useFormik } from 'formik';

import authStore from '../../store/auth';
import fieldsStore from '../../store/fields';

const useContainer = () => {
  const formik = useFormik({
    initialValues: {
      list: fieldsStore.list,
    },
    enableReinitialize: true,
    onSubmit: () => {},
  });

  const handleLogout = () => { authStore.logout() };

  useEffect(() => {
    fieldsStore.getFields();
  }, []);

  return {
    formik,
    handleLogout
  };
};

export default useContainer;
