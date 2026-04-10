import React,{createContext,useReducer} from 'react'

export const CartItems=createContext();

const initialState={

  cart: [
    {
      id: Date.now(),
      name: null,
      price: 0,
      quantity: 0
    }
  ]
}


const reducer=(state,action)=>{

    switch(action.type){
     case "ADD_TO_CART":
        
       const existingItem=state.cart.find((cart)=>cart.id===action.payload.id);

       if(existingItem){
            return {...state,
                cart:state.cart.map((item)=>{
                    return item.id===action.payload.id? {...item,quantity:item.quantity+1 }: item
                })
            }
       }else{
        return {...state,
            cart:[...state.cart,{...action.payload,quantity:1}]
        }
       }

       case "INCREASE_QUANTITY":
        return {...state,
          cart:state.cart.map((item)=>{
            return item.id===action.payload?
            {...item,quantity:item.quantity+1}:
            item
            
          })
        }

        case "DECREASE_QUANTITY":
          return {...state,
            cart:state.cart.map((item)=>{
              return item.id===action.payload && item.quantity>1?
              {...item,quantity:item.quantity-1}:
              item
            })
          };
          case "REMOVE_ITEM":
            return{ ...state,
              cart:state.cart.filter((item)=>{
                return item.id!==action.payload
              })
            }
       default:
        return state;
    }
}



export default function CartContext({children}) {
    
    const [state,dispatch]=useReducer(reducer,initialState);

  return (
  <>
  <CartItems.Provider value={{state,dispatch}}>
    {children}
  </CartItems.Provider>
  </>
  )
}
