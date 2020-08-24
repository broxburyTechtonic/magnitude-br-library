/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
    text: string;
    type: string;
    path: string;
}

export const Button: React.FC<Props> = ({ type, text, path }) => {
  return (
      <NavLink to={path}>
        <button className={type}>{text}</button>
     </NavLink>
  );
};
