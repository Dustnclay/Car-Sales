export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = plusFeature => {
    // console.log(plusFeature)
    // console.log()
    return{
        type:ADD_FEATURE,
        payload:plusFeature
    }
}

export const removeFeature = minusFeature => {
    // console.log(minusFeature)
    return{
        type:REMOVE_FEATURE,
        payload:minusFeature
    }
}
