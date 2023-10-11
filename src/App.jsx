import Header from "./components/UI/Header";
import Stories from "./pages/Stories";
import Article from "./pages/Article";
import Footer from "./components/UI/Footer";
import DataProvider from "./Store/DataProvider";
import Pointer from "./components/Pointer";

function App({ path }) {
  const maintenance = <div id="maintenance">"{path}" route is under maintenance</div>;
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
