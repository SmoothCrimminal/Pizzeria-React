import { useSelector } from "react-redux";
import { deletePizza, clearPizzas } from "../Redux/Actions";
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import pizzaImage from '../../img/hawaiii.jpg'

export const Order = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pizzas = useSelector(state => state.pizzas);
    const price = useSelector(state => state.price);

    useEffect(() => {

    }, [pizzas, price])

    const data = {
        order: {
            sauce: null,
            total: price,
            pizza: pizzas
        }
    }

    const makeOrder = (URL) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data.order)
        };
        fetch(`${URL}order`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.message === "Order accepted!") {
                    navigate('/')
                    dispatch(clearPizzas())
                }
                else {
                    alert(JSON.stringify(data))
                }
            });
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Twoje zamówienie:</h1>
            <h3 style={{ textAlign: 'center' }}>Cena: {price}</h3>
            {pizzas.map((pizza, idx) => (
                <>
                    <div className='menu'>
                        <div className='menu-items'>
                            <div className="menu-item" key={idx}>
                                <img src={pizzaImage} alt="image" />
                                <div className="text-wrapper">
                                    <h1>{pizza.name}</h1>
                                    <h3>{pizza.price} PLN</h3>
                                    <button className='delete-order' onClick={() => dispatch(deletePizza(idx, pizza.price))}>Usuń</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            )
            )}
            <button className='order-button' onClick={() => makeOrder("http://localhost:3333/api/")} disabled={price <= 0 ? true : false}>Zamów</button>
        </>
    )
}