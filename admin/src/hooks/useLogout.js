import { useAuthContext } from "./useAuthContext"
import { useProductsContext } from "./useProductsContext"

export const useLogout = () =>{
    const { dispatch } = useAuthContext()
    const { dispatch: productsDispatch } = useProductsContext()

    const logout = () =>{
        //  remove user from storage
        localStorage.removeItem('user')    

        // dispatch logout action
        dispatch({ type: 'LOGOUT' })
        productsDispatch({ type: 'SET_WORKOUT', payload: null })
    }

    return { logout }

}