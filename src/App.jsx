import Header from "./components/UI/Header";
import Stories from "./pages/Stories";
import Article from "./pages/Article";
import Footer from "./components/UI/Footer";
import DataProvider from "./Store/DataProvider";
import Pointer from "./components/Pointer";
import { useEffect, useContext } from "react";
import { LoaderUpdateContext } from "./Store/data-context";

function App({ path }) {
  window.addEventListener("load", loader, { once: true });
  const maintenance = <div id="maintenance">"{path}" route is under maintenance</div>;
  const ctx = useContext(LoaderUpdateContext);

  useEffect(() => {
    return () => window.removeEventListener("load", loader);
  }, []);

  function loader() {
    console.log("loaded");
    const preloader = document.getElementById("preloader");
    preloader.classList.add("animateLoader");
    setTimeout(() => {
      console.log("preloader animation is done!");
      preloader.remove();
      document.body.classList.remove("app-paused");
      ctx.hideLoader();
    }, 2500);
  }

  return (
    <DataProvider>
      <Header path={path} />
      {path == "/" && maintenance}
      {path == "/work" && maintenance}
      {path == "/about" && maintenance}
      {path == "/stories" && <Stories />}
      {path == "/stories/:article" && <Article />}
      {path == "/contact" && maintenance}
      <Footer />
      <Pointer multiplier={2} />
    </DataProvider>
  );
}

export default App;
