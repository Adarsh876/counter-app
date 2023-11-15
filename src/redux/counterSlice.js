import { createSlice } from "@reduxjs/toolkit";


//creating slice
export const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    //actions are created inside the reducers key as objects
    reducers:{
        //logics to update states

        //function for decrement
        increment:(state , action)=>{
            // if it is a function then it only can be accessed by action and value in payload
            state.value +=action.payload
        },
        //function for decrement
        decrement:(state , action)=>{
            // if it is a function then it can only be accessed by action and value in payload
            state.value -=action.payload
        },
        //function to reset
        reset:(state)=>{
            state.value = 0
        }
    }
})

//action is required by component inorder to change the state
export const{increment,decrement,reset} = counterSlice.actions

//reducer is reuired to store to change the state value
export default counterSlice.reducer