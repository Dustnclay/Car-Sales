import React from 'react'
import {ADD_FEATURE, REMOVE_FEATURE} from '../actions'
import AdditionalFeatures from '../components/AdditionalFeatures';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: [
        // { id: 5, name: 'Spinners', price: 800 }
      ]
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const rootReducer = (state = initialState, action) => {
    switch (action.type){

        case ADD_FEATURE:
            console.log('state',state)
            console.log('add action.payload',action.payload)
            console.log('features', state.car.features)
            return {...state,
                additionalPrice: state.additionalPrice+action.payload.price,
                car: {...state.car,
                     features: [...state.car.features,
                         action.payload]},
                additionalFeatures:state.additionalFeatures.filter(obj => obj.id !== action.payload.id)
            }

        case REMOVE_FEATURE:
            console.log('remove state',state)
            console.log('remove action.payload', action.payload)
            return {...state,
                additionalPrice: state.additionalPrice-action.payload.price,
                    additionalFeatures: [...state.additionalFeatures,
                        action.payload],
                    car:{...state.car,
                        features: state.car.features.filter(obj => obj.id !== action.payload.id)}
            }
    default: return state
}}

