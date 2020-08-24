import React, { useState, useEffect } from 'react';
import { NavBar } from '../UiKit/NavBar/NavBar'; 
import { Route } from 'react-router-dom';
import { LandingPage } from '../LandingPage/LandingPage'


export const App: React.FC<{}> = () => {

  const [activePage, setActivePage] = useState<string>('home')

  return (
    <>
    <NavBar activePage={activePage}/>
      <Route exact path='/'>
        <LandingPage />
      </Route>
    </sring>
    
  );
};
