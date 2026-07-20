import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Trainers from "./Pages/Trainers";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;