import { useEffect, useState } from "react";
import movieAPIConfig from "../../services";
import { BaseHomeContainer, IntroductionContainer } from "./styles";
interface MovieDataProps {
  tmdbId: number;
  title: string;
  type: string;
  year: string;
  posterPath: string;
  posterURLs: String[];
  overview: string;
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
