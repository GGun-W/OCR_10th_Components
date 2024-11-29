import React from "react";

export default function Header({ filters, filter, onFilterChange }){

    return (
        <header>
            <ul>
                {filters.map((value, index) => ( // App.js의 filters 객체수만큼 반복
                    <li ket={index}>
                        <button onClick={() => onFilterChange(value)}>{value}</button>
                    </li>
                ))}

            </ul>
        </header>
    )
}