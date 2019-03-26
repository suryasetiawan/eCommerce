import { ON_SELECTED } from '../constant/ActionTypes';

export default function item(state = {}, action) {
    switch (action.type) {

        case ON_SELECTED:
            return action.item;
        
        default:
            return state;
    }
}