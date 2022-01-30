import React from 'react';
import { Link } from 'react-router-dom'


export function Pages() {
    const pages = ['Strona Główna', 'Menu', 'Koszyk'];

    const hover = (event) => {
        event.target.style.color = "#BBA14F"
    }

    const hoverOff = (event) => {
        event.target.style.color = "#ffffff"
    }

    return (
        <>
            {
                pages.map((page) => {
                    return (
                        <Link
                            key={page}
                            className='link'
                            to={`/${page === 'Strona Główna' ? '' : page}`}
                            style={{ color: '#ffffff' }}
                            onMouseEnter={(e) => hover(e)}
                            onMouseLeave={(e) => hoverOff(e)}
                        >
                            {page.toUpperCase()}
                        </Link>
                    )
                })
            }
        </>
    )
}