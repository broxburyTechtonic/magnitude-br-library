/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { H1 } from '../Typography/H1';
import { H2 } from '../Typography/H2';

export const NavBar: React.FC<{}> = () => {
  const [isActive, setIsActive] = useState<string>('home');

  const updateMenu = (name) => {

  }

  return (
   <section className='container'>
        <H1 text='Library'/>
       <section className='menu'>
        <H2 text='Home' active={isActive === 'home'} />
       </section>
   </section>
  );
};