/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button } from '../Button/Button'

export const NavBar: React.FC<{}> = () => {
  const [isActive, setIsActive] = useState<string>('home');
  const [search, setSearch] = useState<string>('')
  
  const updateMenu = (name: React.SetStateAction<string>) => {
    setIsActive(name)
  }

  const updateSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
   <section className='container'>
     {console.log(isActive)}
      <section className='title-container'>
        <h1 className='title'>The Library</h1>
      </section>
      <section className='menu'>
        <h2 className={isActive === 'home' ? 'h2_active' : 'h2_static'} onClick={() => updateMenu('home')}>Home</h2>
        <h2 className={isActive === 'book' ? 'h2_active' : 'h2_static'} onClick={() => updateMenu('book')}>Bookshelf</h2>
        <h2 className={isActive === 'add' ? 'h2_active' : 'h2_static'} onClick={() => updateMenu('add')}>Add Book</h2>
        </section>
      <section className='search-container'>
        <input type='text' onChange={(e) => updateSearch(e)} value={search} className='search-input' placeholder="Search by Title/Author"></input>
        <Button type={'button__search'} text={'Search'}/>
      </section>
   </section>
  );
};