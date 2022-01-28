import React from "react";
import "./TodoIcon.css";
import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./trash.svg";

// Crear objeto con los iconos que puede mostrar
const iconTypes = {
    check: (color) => (
        <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
    ),
    delete: (color) => (
        <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
    ),
};

export const TodoIcon = ({ type, color, onClick }) => {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
};
