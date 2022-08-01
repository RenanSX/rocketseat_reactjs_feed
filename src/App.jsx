/* import { useState } from 'react' */
/* import reactLogo from './assets/react.svg'
import './App.css' */
import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css"
import './global.css';

function App() {
  return (
    <div>
      <Header/ >

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Renan Silva"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi dignissimos, sint aperiam deserunt id nam libero ex ducimus totam debitis sunt perspiciatis laudantium quas voluptas accusantium, eius tempora, animi quae!"
          />
          <Post
            author="teste"
            content="tyestriam deserunt quas voluptimi quae!"
          />
        </main>
      </div>
      
    </div>
    
  )
}

export default App