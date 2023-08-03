import axios, { AxiosResponse } from "axios";

const movieAPIConfig = axios.create({
  method: "GET",
  url: "https://sujeitoprogramador.com/r-api/?api=filmes",
  // url: "https://streaming-availability.p.rapidapi.com/",
  // params: {
  //   country: "us",
  //   services: "netflix,prime.buy,hulu.addon.hbo,peacock.free",
  //   output_language: "en",
  //   show_type: "movie",
  //   genre: "18",
  //   show_original_language: "en",
  //   keyword: "action",
  // },
  // headers: {
  //   "X-RapidAPI-Key": "82f9e765a8msh09b804db2fd8259p14a29ejsna2e3d3ee9144",
  //   "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
  // },
});

export default movieAPIConfig;



// async function makeMovieAPIRequest(): Promise<AxiosResponse | undefined> {
//   let response = undefined;
//   try {
//     const data = await axios.request(movieAPIConfig);
//     response = data.data.result;
//   } catch (err) {
//     console.log(err);
//   }
//   return response;
// }

// export default makeMovieAPIRequest;
