// accurate if cache is disabled by server only
// export default () => {
//   let num = 0;
//   let percent = 0;
//   let totalSize = 1900; // in bytes
//   const counterElm = document.querySelector("#preloader span");
//   const observer = new PerformanceObserver(list => {
//     list.getEntries().forEach(entry => {
//       num += entry.transferSize;
//       percent = Math.floor((num / 1000 / totalSize) * 100);
//       if (percent <= 0) percent = 10;
//       if (percent >= 100) percent = 100;
//       console.log("Loading by:", percent);
//       counterElm.innerHTML = percent + "%";
//     });
//   });
//   observer.observe({ type: "resource", buffered: true });
// };

export default () => {
  let percent = 0;
  const counterElm = document.querySelector("#preloader span");
  let interval = null;
  interval = setInterval(() => {
    percent++;
    if (percent >= 100) {
      clearInterval(interval);
      percent = 100;
    }
    console.log(percent);
    counterElm.innerHTML = percent + "%";
  }, 10);
};
