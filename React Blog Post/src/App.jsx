import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent.jsx'
import PostCardComponent from './components/PostCardComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import posts from './posts.js'
import styles from './components/PostCardComponent.module.css';

function App() {
  //Filtra post pubblicati
  const published = posts.filter((post) => post.published);
  //Tag unici estratti
  const tags = [...new Set(published.flatMap((post) => post.tags))];

  return (
    <div className="container">
      <HeaderComponent />
      <main>
        {published.map(post => (
          <PostCardComponent
            key={post.id}
            title={post.title}
            image={post.image}
            content={post.content}
            tags={post.tags}
          />
        ))}
      </main>
      <div className={styles.tagsContainer}>
        <h3>Tag Disponibili</h3>
        {tags.map((tag, index) => (
          <span key={index} className={`${styles.tag} ${styles[`tag-${tag}`]}`}>{tag}</span>
        ))}
      </div>
      <FooterComponent />
    </div>
  );
}

export default App
