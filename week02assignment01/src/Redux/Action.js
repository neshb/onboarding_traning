import { ActionTypes } from "./ActionType";

export const addToCart = (product) => {
    return {
        type: ActionTypes.Add_TO_CART,
        payload : product
    };
}

export const removeFromCart = (product) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload : product
    };
}