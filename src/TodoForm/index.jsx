import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

export const TodoForm = () => {
    const [newTodoValue, setnewTodoValue] = React.useState("");
    const { addTodo, setOpenModal } = React.useContext(TodoContext);
    const onChange = (ev) => {
        setnewTodoValue(ev.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (ev) => {
        ev.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label for="">Escribe tu nuevo ToDo</label>
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Cortar la cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
            ></textarea>
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>
            </div>
        </form>
    );
};
