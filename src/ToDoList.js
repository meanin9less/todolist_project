import { useDispatch, useSelector } from "react-redux"
import { deleteList } from "./toDoListSlice";

export default function ToDoList(){
const toDoList = useSelector((state)=> state.toDoList.toDoList);
const dispatch = useDispatch();

const list = toDoList.map((list)=> <><li>{list.item}<button id={list.id} onClick={(e)=>{
    e.preventDefault();
    dispatch(deleteList({id: Number(e.target.id)}));
}}>삭제</button></li></>);
    return(
        <>
            <ul>
                {list}
            </ul>
        </>
    )
}