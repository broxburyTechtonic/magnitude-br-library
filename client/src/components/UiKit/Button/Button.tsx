/* eslint-disable react/prop-types */
import React, { SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
    text: string;
    type: string;
    path: string;
    setPageFn: React.Dispatch<SetStateAction<string>>
}

export const Button: React.FC<Props> = ({ type, text, path, setPageFn }) => {
  return (
      <NavLink to={path}>
        <button className={type} onClick={() => setPageFn(path)}>{text}</button>
     </NavLink>
  );
};
