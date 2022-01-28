import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

export const TodoCounter = () => {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">
            Has completado {completedTodos} de {totalTodos} ToDo's
        </h2>
    );
};
