// SCSS
import "./assets/scss/index.scss";

// REACT-ROUTER
import { Route, Routes } from "react-router";

// PAGES
import Home from "./pages/Home";

// COMPONENTS
import Header from "./components/Header";
// import Footer from "./components/Footer";
import QuestionsBySubject from "./pages/QuestionsBySubject";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="question/" element={<QuestionsBySubject />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
