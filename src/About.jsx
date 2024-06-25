import { useEffect, useState } from "react";
import data from "./data";
import "./About.css";
// import backgroundVideo from './assets/skadi-the-corrupting-heart-arknights-desktop-wallpaperwaifu-com.mp4';

function About() {
  const [count, setCount] = useState(1);
  const [article, setArticle] = useState(data[0]); // Menggunakan data lokal sebagai artikel awal

  function nextPage() {
    setCount((prevCount) => Math.min(prevCount + 1, data.length));
  }

  function previousPage() {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  }

  useEffect(() => {
    setArticle(data[count - 1]);
  }, [count]);

  return (
    <>
      <main className="body-main">
        <header className="App-header">
          {/* <div className="video-container">
          <video autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
        </header>
        <article>
          <div className="gambar">
            {article.imgUrl && <img src={article.imgUrl} alt={article.nama} />}{" "}
            <h3>{article.nama}</h3>
            <p className="deskrip">{article.deskrip}</p>
            <button onClick={previousPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
            <p>Page{count}</p>
          </div>
        </article>
      </main>
    </>
  );
}

export default About;
