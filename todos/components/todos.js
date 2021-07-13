import {useDispatch, useSelector} from "react-redux";
import {fetchTodos, selectAllTodos} from "../features/todos/todoSlice.js";
import styles from "../styles/Home.module.css";
import {useEffect} from "react";

export const Todos = () => {
    const dispatch = useDispatch()
    const todoStatus = useSelector((state) => state.todos.status)
    useEffect(() => {
        if (todoStatus === 'idle') {
            dispatch(fetchTodos())
        }
    }, [todoStatus, dispatch])
    const todos = useSelector(selectAllTodos)
    const todoList = todos.map((todo) => {
        return (
            <a
                href="#"
                className={styles.card}
            >
                <p>{todo.description}</p>
            </a>
        )
    });

    return (
        <div className={styles.grid}>
            {todoList}
        </div>
    )
}

export default Todos
