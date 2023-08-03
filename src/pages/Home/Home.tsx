import { useEffect, useState } from "react";
import movieAPIConfig from "../../services";
import {
  BaseHomeContainer,
  IntroductionContainer,
  APIContainer,
} from "./styles";

// import exemploImg from "../../assets/O mascara.jpg";
import netflixLogo from "../../assets/netflix-exemplo.svg";
interface MovieDataProps {
  id: number;
  nome: string;
  sinopse: string;
  foto: string;
}

export function Home() {
  const [moviesList, setMoviesList] = useState<MovieDataProps[]>([]);
  // const [moviesPicturesUrl, setMoviesPicturesUrl] = useState<string[]>([]);

  const [showCaseMovie, setShowCaseMovie] = useState<MovieDataProps[]>([]);

  useEffect(() => {
    async function getMovieAPIData(): Promise<void> {
      try {
        const data = await movieAPIConfig.get(
          "https://sujeitoprogramador.com/r-api/?api=filmes"
        );
        setMoviesList(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    getMovieAPIData();
  }, []);

  console.log("asas", moviesList);
  

  // function getImagesUrl(): void {
  //   const moviePictures = moviesList?.map((url) => url.posterURLs);
  //   const originalPicture = moviePictures?.map((img: any) => img.original);
  //   setMoviesPicturesUrl(originalPicture);
  // }

  function getShowCaseMovie(): void {
    const getMovies = moviesList;
    const showCaseMovie = getMovies.filter(
      (movie) => movie.nome === "Vingadores Ultimato"
    );
    setShowCaseMovie(showCaseMovie);
  }

  useEffect(() => {
    // getImagesUrl();
    getShowCaseMovie();
  }, [moviesList]);

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
          {showCaseMovie?.map((caseMovie) => {
            return (
              <APIContainer key={caseMovie.id}>
                <div>
                  <img src={caseMovie.foto} alt={caseMovie.nome} />
                </div>

                <div>
                  <div>
                    <img className="netflix-logo" src={netflixLogo} alt="netflix logo" />
                    <p>Netflix . 12 minutes ago</p>
                  </div>

                  <div>
                    <h2>{caseMovie.nome}</h2>
                    <p>{caseMovie.sinopse}</p>

                    <span>
                      <p>Movies</p>
                    </span>
                  </div>
                </div>
              </APIContainer>
            )
          })}

        {/* <section>
          {moviesList && (
            <>
              {moviesList?.map((movie) => {
                return <div key={movie.id}>
                  <h1>{movie.nome}</h1>
                  <img src={movie.foto} />
                  <p>{movie.sinopse}</p>
                </div>;
              })}
            </>
          )}
        </section> */}
      </main>
    </BaseHomeContainer>
  );
}
