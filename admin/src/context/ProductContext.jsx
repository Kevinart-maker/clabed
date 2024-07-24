import { createContext, useReducer } from "react";

export const ProductContext = createContext()

export const ProductsReducer = (state, action) =>{
    switch(action.type){
        case 'SET_PRODUCTS':
            return{
                products: action.payload
            }
        case 'CREATE_PRODUCTS':
            return{
                products: [action.payload, ...state.products]
            }
        case 'UPDATE_PRODUCTS':
            return {
                products: state.products.map((product) =>
                product._id === action.payload._id ? { ...product, ...action.payload } : product
                )
            }
        case 'DELETE_PRODUCTS':
            return{
                products: state.products.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const ProductContextProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(ProductsReducer, {
        products: []
    })


    return(
        <ProductContext.Provider value = {{...state, dispatch}}>
            { children }
        </ProductContext.Provider>
    )
}