import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  const [project, setProject] = useState();

  return (
    <>
    <Header />
    <Outlet context={{project, setProject}}/>
    <Footer />
    </>
  );
}

export default App;
