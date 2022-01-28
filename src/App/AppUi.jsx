import React from "react";
import { TodoCounter } from "../TodoCounter/index.jsx";
import { TodoSearch } from "../TodoSearch/index.jsx";
import { TodoList } from "../TodoList/index.jsx";
import { TodoItem } from "../TodoItem/index.jsx";
import { CreateTodoButton } from "../CreateTodoButton/index.jsx";
import { TodoContext } from "../TodoContext/index.jsx";
import { TodoForm } from "../TodoForm/index.jsx";
import { Modal } from "../Modal/index.jsx";
import { EmptyTodos } from "../EmptyTodos/index.jsx";
import { TodosError } from "../TodosError/index.jsx";
import { TodosLoading } from "../TodosLoading/index.jsx";

export const AppUi = () => {
    const {
        error,
        loading,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <TodosError error={error} />}
                {loading && <TodosLoading />}
                {!loading && !searchedTodos.length && <EmptyTodos />}

                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => {
                            toggleCompleteTodo(todo.text);
                        }}
                        onDelete={() => {
                            deleteTodo(todo.text);
                        }}
                    />
                ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton setOpenModal={setOpenModal} />
        </React.Fragment>
    );
};
