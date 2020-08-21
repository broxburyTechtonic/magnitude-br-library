/* eslint-disable react/prop-types */
import React from 'react';

interface Props {
    text: string;
}

export const H1: React.FC<Props> = ({  text }) => {
  return (
    <h1 className='h1'>{text}</h1>
  );
};