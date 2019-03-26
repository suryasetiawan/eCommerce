import { LOAD_DATA, ADD_DATA, LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAILURE, ADD_PRODUCT_SUCCESS } from '../constant/ActionTypes';

export default function products(state = [], action) {
    switch (action.type) {

        case LOAD_PRODUCT_SUCCESS:
            return action.products;

        case LOAD_PRODUCT_FAILURE:
            return state;

        case ADD_PRODUCT_SUCCESS:
            return state;

        case ADD_DATA:
            return [...state, { id: action.id, title: action.title, rate: action.rate, description: action.description, price: action.price, brand: action.brand, detailProduct: action.detailProduct }]

        default:
            return state;
    }
}