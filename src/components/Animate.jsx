import { useEffect } from "react";

export default function Animate(props) {
  function getNonAnimatedCards() {
    const cards = [].slice.call(document.querySelectorAll(`.${props.className}`));
    return cards.filter(card => !card.classList.contains("applyAnimation"));
  }

  function handleAnimation() {
    const cards = getNonAnimatedCards();

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !entry.target.classList.contains("applyAnimation")) {
          console.warn("ENTER:", entry.target);
          entry.target.classList.add("applyAnimation");
          observer.disconnect();
          return;
        }
      },
      { root: null, threshold: 0.7 }
    );

    cards.forEach(card => observer.observe(card));
  }

  useEffect(() => {
    handleAnimation();
    window.addEventListener("scroll", handleAnimation);
    return () => window.removeEventListener("scroll", handleAnimation);
  }, []);

  return;
}
