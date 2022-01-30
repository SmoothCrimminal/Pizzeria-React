import { ADD, DELETE, CLEAR } from '../Actions/index'

export const PizzaReducer = (state = { pizzas: [], price: 0 }, actions) => {
    switch (actions.type) {
        case (ADD):
            state.pizzas.push(actions.data.pizza);
            state.price += actions.data.price;
            return { ...state }
        case (DELETE):
            console.log(actions.data)
            state.pizzas.pop(pizza => pizza === actions.data.pizza)
            state.price -= actions.data.price;
            return { ...state }
        case (CLEAR):
            state.pizzas = [];
            state.price = 0;
            return { ...state }
        default:
            return (state)
    }
}