import React from 'react'
import { useState, useEffect } from 'react'
import { ClockLoader } from 'react-spinners'
import pizzaImage from '../../img/hawaiii.jpg'
import { useDispatch } from 'react-redux'
import { addPizza } from '../Redux/Actions'

export function Menu() {

    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPizzas = (URL) => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => { setPizzas(data); setLoading(false); })
    }

    const Loader = () => {
        return (
            <section className='center'>
                <ClockLoader size="40px" color="#157347" />
            </section>
        )
    }

    useEffect(() => {
        fetchPizzas('http://localhost:3333/api/pizza')
    }, [])

    const Pizzas = () => {

        const dispatch = useDispatch();
        return (
            <>
                {pizzas.map((pizza) => (
                    <>
                        <div className="menu-item" key={pizza.id}>
                            <img src={pizzaImage} alt="image" />
                            <div className="text-wrapper">
                                <h1>{pizza.name}</h1>
                                <p>Super pizza</p>
                                <h3>{pizza.price} PLN</h3>
                                <button className='delete-pizza' onClick={() => dispatch(addPizza(pizza))}>Add to order</button>
                            </div>
                        </div>
                    </>
                )
                )}

            </>

        )
    }
    return (
        <>
            {loading ? <Loader /> :
                <div className='menu'>
                    <div className='menu-items'>
                        <Pizzas />
                    </div>
                </div>
            }
        </>
    )
}
