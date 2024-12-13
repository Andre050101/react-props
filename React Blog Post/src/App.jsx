import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent.jsx'
import PostCardComponent from './components/PostCardComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'

function App() {
  return (
    <div className="container">
      <HeaderComponent />
      <main>
        <PostCardComponent />
      </main>
      <FooterComponent />
    </div>
  );
}

export default App
