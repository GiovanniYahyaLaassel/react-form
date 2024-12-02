import React, {useState} from "react";
import Header from "./components/header";
import styles from "./App.module.css";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";
import Card from "./components/Card";
import  {posts} from "./components/Data/posts (1)";


function App() {
  const pubblishedPosts = posts.filter((post) => post.published); // filtro i post pubblicati
  // console.log('Pubblished posts:', pubblishedPosts);

  const uniqueTags = getUniqueTags(posts)  //oottengo i tag distinti
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header/>

      <section className={styles.tagSection}>
        <h3>Lista dei Tag</h3>
        <div className={styles.tagList}>
          {uniqueTags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>  
      </section>   
      
      <div className={styles.cardsContainer}>
         {/* genero le card */}
          {pubblishedPosts.map((post) => (
            <Card 

              key={post.id} 
              title={post.title}
              content={post.content}
              image={post.image}
              tags={post.tags} 
            />
          ))}
      </div>
      <Footer/>

    </div>
    </>
  )
}

// creo una funzione così ottengo i tag distinti
function getUniqueTags(posts) {
    const allTags = posts.flatMap((post) => post.tags); // creo un unico array
    const uniqueTags = [...new Set(allTags)]; // rimuovo i duplicati
    return uniqueTags;
}
export default App
