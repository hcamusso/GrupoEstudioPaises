const initialState = {
    countriesall : []
   }

function  rootReducer (state = initialState, action) {
    if (action.type==='GET_COUNTRIES'){ 
            return {
                ...state,
                countriesall: action.payload,              
            }
        }
    if (action.type === 'POST_ACTIVITY'){
        return {
            ...state,
        }
    }
     return state;

}
export default rootReducer;