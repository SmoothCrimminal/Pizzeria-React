import React from 'react';
import { Pages } from './Pages';

export function Navbar() {
    return (
        <div className='nav-style' >
            <div className='logo'>
                🍕 Pizzeria Romana
            </div>
            <Pages />
        </div >
    )
}