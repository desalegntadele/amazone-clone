import { useReducer } from "react"
import { Type } from "./action.type"
export const initialState={
    basket:[]
}
export const reducer=(state, action)=>{
    switch (action.type) {   
        case Type.ADD_TO_BASKET:
            // return{
            //     ...state,
            //      basket:[...state.basket,action.item],
            // }
            const existingItem=state.basket.find((item)=>item.id===action.item.id)
            if(!existingItem){
               return{...state,
                basket:[...state.basket,{...action.item,amount:1}]
            }}
            else{
            let updatedBasket=state.basket.map((item)=>{
                item.id===action.item.id?{...item,amount:item.amount+1}:item
            })
            return {
                ...state,
                basket:updatedBasket
            }
            }
        default:
        return state
        
    }
}
