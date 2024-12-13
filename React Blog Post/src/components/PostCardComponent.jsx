import React from "react";
import styles from './PostCardComponent.module.css';

function PostCardComponent({ title, image, content, tags }) {
    const handleButtonClick = () => {
        alert(`Hai cliccato su "${title}"!`);
    };
    return (
        <div className={styles.card}>
            <div className={styles.imagePlaceholder}>
                <img src={image || "https://placehold.co/600x400"} alt={title} className={styles.image}></img>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{content}</p>
                <div className={styles.tagsContainer}>
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`${styles.tag} ${styles[`tag-${tag}`]}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <button className={styles.button} onClick={() => alert(`Hai cliccato su "${title}"!`)}>Leggi di più</button>
            </div>
        </div>
    );
}

export default PostCardComponent;