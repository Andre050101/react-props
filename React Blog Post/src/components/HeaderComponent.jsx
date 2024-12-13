import React from 'react';
import styles from './HeaderComponent.module.css';

function HeaderComponent() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Il mio blog</h1>
        </header>
    );
}

export default HeaderComponent;