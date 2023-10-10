export default function Line(props) {
  return (
    <svg style={{ ...props.style, transition: "transform 0.3s ease 0s" }} width={20} height={2} viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1={1} y1={1} x2={19} y2={1} stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="bevel" />
    </svg>
  );
}
