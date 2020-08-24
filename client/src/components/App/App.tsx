import React, { useState, useEffect } from 'react';
import { NavBar } from '../UiKit/NavBar/NavBar'; 
import { Route } from 'react-router-dom';
import { LandingPage } from '../LandingPage/LandingPage'


export const App: React.FC<{}> = () => {

  const [activePage, setActivePage] = useState<string>('home');


  return (
    <>
    <NavBar activePage={activePage} updateMenu={setActivePage}/>
      <Route exact path='/'>
        <LandingPage setPage={setActivePage}/>
      </Route>
      <Route exact path='/bookshelf'>
        <h2>Hello bookshelf</h2>
      </Route>
      <Route exact path='/add-book'>
        <h2>Hello addbook</h2>
      </Route>
    </>
    
  );
};
