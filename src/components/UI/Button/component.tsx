import classNames from 'classnames';

const Button = ({ type, onClick, className, children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={classNames(
      'bg-gray-700 relative text-white shadow-md border border-transparent rounded-lg py-[6px] px-4 hover:opacity-95 active:scale-90 transition-all duration-150',
      className,
    )}
    type={type}
    onClick={onClick}
    {...rest}
  >
    {children}
  </button>
);

export default Button;