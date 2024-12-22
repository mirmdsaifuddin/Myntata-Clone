import { createSlice } from "@reduxjs/toolkit";


const bagSlice=createSlice({
  name:"bag",
  initialState:[],
  reducers:{
    addIToBag:(state,action)=>{
     state.push(action.payload)
    },
    removeFromBag:(state,action)=>{
      return state.filter((itemid)=> itemid!==action.payload)
     }
  }
})

export const bagAction = bagSlice.actions;

export default bagSlice;