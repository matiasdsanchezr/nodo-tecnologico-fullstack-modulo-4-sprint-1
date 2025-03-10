import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </>
  );
}

export default App;
