import Header from "./components/UI/Header";
import Main from "./components/UI/Main";
import Footer from "./components/UI/Footer";
import DataProvider from "./Store/DataProvider";
import Pointer from "./components/Pointer";

function App() {
  return (
    <DataProvider>
      <Header />
      <Main />
      <Footer />
      <Pointer multiplier={2} />
    </DataProvider>
  );
}

export default App;
