import { createSlice } from "@reduxjs/toolkit";
const list = [];
const toDoListSlice = createSlice({
    name:"toDoList",
    initialState:{
        toDoList:list,
    },
    reducers:{
        addList:(state, action)=>{
            state.toDoList.push({id: Date.now(), ...action.payload});
        },
        deleteList:(state, action)=>{
            state.toDoList = state.toDoList.filter((list)=>list.id !== action.payload.id);
        }
    }
});

export const {addList, deleteList} = toDoListSlice.actions;
export default toDoListSlice;