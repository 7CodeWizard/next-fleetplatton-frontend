// components/atoms/Button.jsx
import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
