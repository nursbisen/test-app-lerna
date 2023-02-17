import { useField } from 'formik';

import { Input } from '../UI';
import { InputType } from '../UI/Input/types';

const InputField = ({ label, name, ...rest }: InputType) => {
  const [field] = useField(name || '');

  return (
    <Input label={label} {...field} {...rest} />
  );
};

export default InputField;
