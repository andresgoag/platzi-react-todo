import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

export const TodoSearch = () => {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (ev) => {
        setSearchValue(ev.target.value);
    };

    return (
        <input
            className="TodoSearch"
            type="text"
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
};
