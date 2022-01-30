import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { HomePage } from '../Home/homePage.js'
import { Menu } from '../Menu/Menu';
import { Handle404 } from './NotFound'
import { Order } from '../Order/Order'

export function Nav() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className='banner' />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<Menu />} />
                <Route path='/koszyk' element={<Order />} />
                <Route path="*" element={<Handle404 />} />
            </Routes>
        </BrowserRouter>
    )
}