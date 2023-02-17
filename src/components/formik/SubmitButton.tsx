import { useFormikContext } from 'formik';
import { Button } from '../UI';

const SubmitButton = ({ children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      type="submit"
      onClick={handleSubmit as () => void}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
