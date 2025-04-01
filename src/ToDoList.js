import { useDispatch, useSelector } from "react-redux"
import { deleteList } from "./toDoListSlice";

export default function ToDoList() {
const toDoList = useSelector((state) => state.toDoList.toDoList);
const dispatch = useDispatch();

return (
    <>
        <ul>
            {toDoList.map((list) => <><li>{list.item}<button onClick={(e) => {
                e.preventDefault();
                dispatch(deleteList({ id: list.id }));
            }}>삭제</button></li></>)}
        </ul>
    </>
)
}