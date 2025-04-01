import { useDispatch } from "react-redux";
import { addList } from "./toDoListSlice";
import { Outlet, useNavigate } from "react-router-dom";

export default function MainLayout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <h1>to-Do List</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                const inputItem = e.target.input.value;
                if(inputItem){
                    dispatch(addList({ item: inputItem }));
                    e.target.input.value = "";
                    navigate("/todolist");
                };
            }}>
                <input type="text" name="input"></input>
                <button type="submit">추가</button>
            </form>
            <hr></hr>
            <Outlet />
        </>
    )
}