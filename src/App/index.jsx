import React from "react";
import { AppUi } from "./AppUi";
import { TodoProvider } from "../TodoContext/index.jsx";

export const App = () => {
    return (
        <TodoProvider>
            <AppUi />
        </TodoProvider>
    );
};
