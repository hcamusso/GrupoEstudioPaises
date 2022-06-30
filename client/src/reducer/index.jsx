const initialState = {
    countryAll: [],
    countryDetail: [],
    countryName: [],
    activities: [],
    continentFiltro: []
}

export const rootReducer  = (state = initialState, action) => {
    switch(action.type){

        case 'GET_COUNTRIES':
            return ({
                ...state,
                countryAll: action.payload,
                continentFiltro: action.payload
            })
 default: return state
    }
}