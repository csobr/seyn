
import * as Types from './types'

const initialState: Types.AuthState = {
    user: null,
    authenticated: false,
    loading: false,
    error: '',
    needVerification: false,
    success: ''
}

export default (state = initialState, action: Types.AuthAction) => {
    switch (action.type) {
        case Types.SET_USER:
            return {
                ...state,
                user: action.payload,
                authenticated: true
            }
        case Types.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case Types.SIGN_OUT:
            return {
                ...state,
                user: null,
                authenticated: false,
                loding: false
            }   
        case Types.SET_ERROR:
            return {
                ...state,
                error: action.payload
        
            }
        case Types.NEED_VERIFICATION: {
            return {
                ...state,
                needVerfication: true
            }
            
        }
        
        case Types.SET_SUCCESS:
            return {
                ...state,
                success: action.payload
             
            }
        default: 
        return state
      }
}