import React from "react";
import styles from './Header.module.css'

export default function Header({ filters, filter, onFilterChange }){

    return (
        <header className={styles.header}>
            <ul className={styles.filters}>
                {filters.map((value, index) => ( // App.js의 filters 객체수만큼 반복
                    <li ket={index}>
                        <button className={`${styles.filter} ${filter === value && styles.selected}`}
                        onClick={() => onFilterChange(value)}>{value}</button>
                    </li>
                ))}

            </ul>
        </header>
    )
}