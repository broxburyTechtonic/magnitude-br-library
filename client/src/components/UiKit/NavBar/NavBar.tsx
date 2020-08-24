/* eslint-disable react/prop-types */
import React, { useState, SetStateAction } from 'react';
import { Button } from '../Button/Button';
import { NavLink } from 'react-router-dom';

interface Props {
  activePage: string;
  updateMenu: React.Dispatch<SetStateAction<string>>
}

export const NavBar: React.FC<Props> = ({ activePage, updateMenu }) => {
  const [search, setSearch] = useState<string>('')
  

  const updateSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
   <section className='container'>
      <section className='title-container'>
        <h1 className='title'>The Library</h1>
      </section>
      <section className='menu'>
        <NavLink to='/'>
          <h2 className={activePage === 'home' ? 'h2_active' : 'h2_static'} onClick={() => updateMenu('home')}>Home</h2>
        </NavLink>
        <NavLink to='/bookshelf'>
          <h2 className={activePage === 'bookshelf' ? 'h2_active' : 'h2_static'} onClick={() => updateMenu('bookshelf')}>Bookshelf</h2>
        </NavLink>
        <NavLink to='/add-book'>
          <h2 className={activePage === 'add-book' ? 'h2_active' : 'h2_static'} onClick={() => updateMenu('add-book')}>Add Book</h2>
        </NavLink>
      </section>
      <section className='search-container'>
        <input type='text' onChange={(e) => updateSearch(e)} value={search} className='search-input' placeholder="Search by Title/Author"></input>
        <Button type={'button__search'} text={'Search'} path={'bookshelf'} setPageFn={updateMenu}/>
      </section>
   </section>
  );
};