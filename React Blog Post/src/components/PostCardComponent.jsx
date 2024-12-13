import React from "react";
import styles from './PostCardComponent.module.css';

function PostCardComponent() {
    return (
        <div className={styles.card}>
            <div className={styles.imagePlaceholder}>
                <span>600 x 400</span>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>Titolo del post</h2>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima consequatur odit voluptate cupiditate nesciunt. Molestiae, sequi ipsa? Sint enim officiis delectus porro corporis!</p>
                <button className={styles.button}>Leggi di più</button>
            </div>
        </div>
    );
}

export default PostCardComponent;