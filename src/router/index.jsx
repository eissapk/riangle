import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Error from "../pages/Error.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App path="/" />, errorElement: <Error /> },
  { path: "/work", element: <App path="/work" /> },
  { path: "/about", element: <App path="/about" /> },
  { path: "/stories", element: <App path="/stories" /> },
  { path: "/stories/:article", element: <App path="/stories/:article" /> },
  { path: "/contact", element: <App path="/contact" /> },
]);
export default router;
