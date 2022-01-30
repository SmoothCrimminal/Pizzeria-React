export const ADD = 'ADD_PIZZA';
export const DELETE = 'DELETE_PIZZA';
export const CLEAR = 'CLEAR'


export const addPizza = (pizza) => {
    return {
        type: ADD,
        data: {
            pizza: pizza,
            price: pizza.price
        }
    }
}

export const deletePizza = (pizza, price) => {
    return {
        type: DELETE,
        data: {
            pizza: pizza,
            price: price
        }
    }
}

export const clearPizzas = () => {
    return {

        type: CLEAR
    }
}