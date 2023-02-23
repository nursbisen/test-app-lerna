import classNames from 'classnames';

import { InputType } from './types';

const Input = ({ label, className, value, onChange, ...rest }: InputType) => (
  <div className={classNames(className, 'group relative rounded-lg border border-gray-400 bg-white shadow-md hover:border-gray-800 w-full')}>
    <input
      className="peer py-2 px-3 outline-none bg-transparent w-full h-full"
      type="text"
      value={value}
      onChange={onChange}
      placeholder=" "
      required
      autoComplete="off"
      {...rest}
    />
    <label
      className="absolute py-[1px] px-[3px] leading-none text-[12px] ml-1 pointer-events-none transition-all duration-150 text-gray-500 group-hover:text-gray-900 bg-white peer-placeholder-shown:text-[14px] peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 -top-[10px] left-4 peer-focus:text-[12px] peer-focus:-top-[10px] peer-focus:left-4"
    >
      {label}
    </label>
  </div>
);

export default Input;