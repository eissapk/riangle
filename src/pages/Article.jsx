import { useParams } from "react-router-dom";
export default function Article() {
  const { article } = useParams();
  return (
    <div id="maintenance">
      "{article}" <br />
      article is under maintenance!
    </div>
  );
}
