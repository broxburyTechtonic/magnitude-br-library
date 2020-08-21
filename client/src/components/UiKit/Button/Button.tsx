/* eslint-disable react/prop-types */
import React from 'react';

interface Props {
    text: string;
    type: string;
    
}

export const Button: React.FC<Props> = ({ type, text }) => {
  return (
    <button className={type}>{text}</button>
  );
};
