import { createSlice } from "@reduxjs/toolkit";
const list = [];
const toDoListSlice = createSlice({
    name:"toDoList",
    initialState:{
        toDoList:list,
        itemId:1
    },
    reducers:{
        addList:(state, action)=>{
            state.toDoList.push({id:state.itemId, ...action.payload});
            state.itemId++;
        },
        deleteList:(state, action)=>{
            state.toDoList = state.toDoList.filter((list)=>list.id !== action.payload.id);
        }
    }
});

export const {addList, deleteList} = toDoListSlice.actions;
export default toDoListSlice;