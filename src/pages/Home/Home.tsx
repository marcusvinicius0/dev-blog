import { useEffect, useState } from "react";
import movieAPIConfig from "../../services";
import { BaseHomeContainer, IntroductionContainer, NewsAPIContainer } from "./styles";
import exemploImg from '../../assets/O mascara.jpg'
import Logo from '../../assets/New-NETFLIX.png'
interface MovieDataProps {
  tmdbId: number;
  title: string;
  type: string;
  year: string;
  posterPath: string;
  posterURLs: String[];
  overview: string;
  genres: Array<{ name: string }> | null;
}

export function Home() {
  const [moviesList, setMoviesList] = useState<MovieDataProps[]>([]);

  useEffect(() => {
    async function getMovieAPIData() {
      try {
        const data = await movieAPIConfig.get(
          "https://streaming-availability.p.rapidapi.com/v2/search/basic"
        );
        setMoviesList(data.data.result);
      } catch (err) {
        console.log(err);
      }
    }
    getMovieAPIData();
  }, []);

  return (
    <BaseHomeContainer>
      <main>
        <IntroductionContainer>
          <article>
            <p>BEM-VINDO AO BOLETIM</p>
            <h2>
              Crie narrativas ✍️ que acendem inspirações💡,
              <br />
              conhecimento 📕, e entretenimento 🎬
            </h2>
          </article>
        </IntroductionContainer>
        <NewsAPIContainer>
        <article>
          <div className="fatherClass">
            <div className="maskClass"><img src={exemploImg}></img></div>
            <div className="divItemsAPI">
              <div className="netflix"><img src={Logo} className="logo"/><span> Netflix . 12 minutes ago</span></div>
              <div className="classText">
                <h1>Where to watch<br />
                 the movies</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/> Aperiam, aliquid blanditiis! Nihil id dicta iure, explicabo <br/> aspernatur libero veritatis quasi beatae
                   minima nam <br/>  excepturi modi corrupti sunt, soluta quaerat quidem!</p>

              </div>
              <div className="textMovies"><span>Movies</span> . 4 min read</div>
            </div>
          </div>
        </article>
        </NewsAPIContainer>
        {/* <section>
        {moviesList?.map((movie) => {
          return (
            <div key={movie.tmdbId}>
              <h2>{movie.title}</h2>
              <time>{movie.year}</time>
              <span>{movie.type}</span>
              <p>{movie.overview}</p>
              <img src={movie.posterURLs} alt="" />
            </div>
          );
        })}
      </section> */}
      </main>
    </BaseHomeContainer>
  );
}
