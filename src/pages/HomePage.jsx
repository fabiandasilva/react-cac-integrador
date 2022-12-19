import { Banner, Nav, Row } from "../components";
import { Request } from "../services";

const HomePage = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Row fetchUrl={Request.fetchTrending} title="Novedades populares" />
      <Row fetchUrl={Request.fetchTopRated} title="Más vistos" />
      <Row fetchUrl={Request.fetchActionMovies} title="Acción" />
      <Row fetchUrl={Request.fetchComedyMovies} title="Comedia" />
      <Row fetchUrl={Request.fetchHorrorMovies} title="Terror" />
      <Row fetchUrl={Request.fetchRomanceMovies} title="Romance" />
      <Row fetchUrl={Request.fetchDocumentaries} title="Documentales" />
    </>
  );
};

export default HomePage;
