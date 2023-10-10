import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);

// let num = 0;
// const observer = new PerformanceObserver((list) => {
//   list.getEntries().forEach((entry) => {
//       num += entry.transferSize;
//       console.warn(entry, num/1000)
//   });
// });
// observer.observe({ type: "resource", buffered: true });
// -----------
// p = function(e, t, r) {
//     try {
//         if (PerformanceObserver.supportedEntryTypes.includes(e)) {
//             var n = new PerformanceObserver(function(e) {
//                 t(e.getEntries())
//             }
//             );
//             return n.observe(Object.assign({
//                 type: e,
//                 buffered: !0
//             }, r || {})),
//             n
//         }
//     } catch (e) {}
// }
