import { FormikProvider } from 'formik';
import { observer } from 'mobx-react-lite';

import { Button, Loader } from '../../components/UI';
import { InputField } from '../../components/formik';

import useContainer from './hook';

const Fields = () => {
  const { formik, isLoading, handleLogout } = useContainer();

  return !isLoading ? (
    <>
      <div className="mx-60 rounded-2xl bg-white shadow-2xl border-none pt-5 pb-6 px-7 flex flex-col gap-5">
        <h1 className="m-0 text-gray-700 text-xl font-bold">Динамические поля</h1>
        <FormikProvider value={formik}>
          {formik.values.list.map((field, index) => (
            <InputField key={field.key} name={`list[${index}].value`} label={field.key} />
          ))}
        </FormikProvider>
      </div>
      <div className="fixed right-40">
        <Button type="button" onClick={handleLogout}>Выйти</Button>
      </div>
    </>
  ) : (
    <div className="flex w-full justify-center mt-52"><Loader className="w-[200px] h-[200px]" /></div>
  );
};

export default observer(Fields);