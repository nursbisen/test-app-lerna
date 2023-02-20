import { useFormikContext } from 'formik';

import { Button, Loader } from '../UI';

import { SubmitButtonType } from './types';

const SubmitButton = ({ children, isLoading = false, ...rest }: SubmitButtonType) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      type="submit"
      onClick={handleSubmit as () => void}
      {...rest}
    >
      {children}
      {isLoading && (
        <div className="absolute left-1 top-[2px]">
          <Loader className="w-8 h-8" />
        </div>
      )}
    </Button>
  );
};

export default SubmitButton;
