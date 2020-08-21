/* eslint-disable react/prop-types */
import React from 'react';

interface Props {
    text: string;
}
export const H1: React.FC<Props> = ({ type, text }) => {
  return (
    <h1 className={type}>{text}</h1>
  );
};