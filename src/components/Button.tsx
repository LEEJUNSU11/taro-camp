// src/components/Button.tsx

import {ButtonProps} from '@/types/ButtonTypes';

const variantStyles = {
  primary: 'bg-lime-800 text-white hover:bg-lime-600',
  secondary: 'bg-gray-200 text-gray-600 hover:bg-gray-300',
  tertiary: 'bg-transparent text-blue-500 hover:underline',
};

const Button = ({
  variant = 'primary',
  children,
  className = '',
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`mx-1 px-4 py-2 rounded transition-colors ${variantStyles[variant]} ${className}`}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;