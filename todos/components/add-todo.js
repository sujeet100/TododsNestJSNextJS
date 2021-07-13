import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../features/todos/todoSlice.js";
import styles from './addTodos.module.css'

export const AddTodo = () => {
    const [newTodo, setNewTodo] = useState();
    const [error, setError] = useState();
    const dispatch = useDispatch()

    const addTodoOnSubmit = (event) => {
        event.preventDefault();
        if(newTodo === "") {
            setError("To do must not be empty")
        } else {
            dispatch(addTodo(newTodo))
            setNewTodo("")
            setError("")
        }
    }
    return (
        <div className={styles.addTodo}>
            <form onSubmit={addTodoOnSubmit}>
                <input
                    id="new-to-do"
                    name="newTodo"
                    placeholder="Add a task..."
                    type="text"
                    value={newTodo}
                    onChange={
                        (event) => {
                            setNewTodo(event.target.value);
                            if(event.target.value !== "") {
                                setError("")
                            }
                        }
                    }/>
                <button name="addNewTodo">Add</button>
            </form>
            <p className={styles.error}>{error}</p>
        </div>
    )
}
