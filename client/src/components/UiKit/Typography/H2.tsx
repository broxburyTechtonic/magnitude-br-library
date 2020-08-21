/* eslint-disable react/prop-types */
import React from 'react';

interface Props {
    text: string;
    active: boolean;
}

export const H2: React.FC<Props> = ({ text, active }) => {
  return (
    <h2 className={active ? 'h2__active' : 'h2__static'}>{text}</h2>
  );
};