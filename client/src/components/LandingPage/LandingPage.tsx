import React, { SetStateAction } from 'react';
import { Button } from '../UiKit/Button/Button'
import { NavLink } from 'react-router-dom';

interface Props {
    setPage: React.Dispatch<SetStateAction<string>>
}

export const LandingPage: React.FC<Props> = ({ setPage }) => {
    return (
        <section className='landing-container'>
            <section className='landing-img'>
                <h3 className='title__large-white'>Books.</h3>
                <h3 className='title__medium-white' >Read'em & weep</h3>
            </section>
                <section className='books-info'>
                    <h3 className='title__medium-black'>Welcome to the Library</h3>
                    <p className='book-info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </section>
                <section className='centered'>
                    <Button type={'button__dark'} text={'See Books'} path={'bookshelf'} setPageFn={setPage}/>
                </section>
                <section className='add-book-text'>
                    <p className='book-info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </section>
                <section className='centered'>
                    <Button type={'button__dark'} text={'Add a Book'} path={'add-book'} setPageFn={setPage}/>
                </section>
        </section>
    )
}