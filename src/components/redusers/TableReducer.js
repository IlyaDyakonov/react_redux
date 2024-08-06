import { nanoid } from 'nanoid';
import {
    ADD_SERVICE,
    ADD_SERVICE_CHANGES,
    REMOVE_SERVICE,
} from '../actions/actions';


const initialState = [
    {
        id: '7pJ5',
        name: 'Замена стекла',
        price: 1000,
    },
    {
        id: 'Vmp1Eh',
        name: 'Замена дисплея',
        price: 5000,
    },
    {
        id: 'WJ0u',
        name: 'Замена аккумулятора',
        price: 2000,
    },
    {
        id: 'G5R',
        name: 'Замена динамика',
        price: 1500,
    },
]

const TableReducer = (state = initialState, action) => {
    const { index, id, name, price } = { ...action.payload };
    switch (action.type) {
        case ADD_SERVICE:
            return [...state, { id: nanoid(), name, price: Number(price) }];
        case ADD_SERVICE_CHANGES: {
            const updatedState = [
                ...state.slice(0, index),
                {
                    id: state[index].id,
                    name: name,
                    price: Number(price),
                    
                },
                ...state.slice(index + 1),
            ];
            return updatedState;}
        case REMOVE_SERVICE:
            return state.filter((service) => service.id != id);
        default:
            return state;
    }
    
}

export default TableReducer;