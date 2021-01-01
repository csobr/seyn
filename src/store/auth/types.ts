export const SET_USER = 'SET_USER';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_LOADING = 'SET_LOADING';
export const NEED_VERIFICATION = 'NEED_VERIFICATION';
export const SET_SUCCESS = 'SET_SUCCESS';
export const SET_ERROR = 'SET_ERROR'

export interface User { 
    firstName: string;
    lastName: string;
    id: string;
    createdAt: any;
}

export interface AuthState {
    user: User | null;
    authenticated: boolean;
    loading: boolean;
    error: string;
    needVerification: boolean;
    success: string;
}

export interface SignUpData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface SignInData {
    email: string;
    password: string;
}
interface SetUserAction {
    type: typeof SET_USER;
    payload: User;
}
interface NeedVerificationAction {
    type: typeof NEED_VERIFICATION;
}

interface SetLoadingAction {
    type: typeof SET_LOADING;
    payload: boolean;
}
interface SignOutAction {
    type: typeof SIGN_OUT;
}
interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;

}
interface SetSuccessAction {
    type: typeof SET_SUCCESS
    payload: string;
}

export type AuthAction = SetUserAction | SetLoadingAction | SignOutAction | SetSuccessAction | SetErrorAction | NeedVerificationAction