import Link from "../Link";
import Logo from "../Icons/Logo";
import { DataContext } from "../../Store/data-context";
import { useContext } from "react";
import "./Footer.css";

function Footer() {
  const ctx = useContext(DataContext);

  return (
    <footer>
      <p>{ctx.footer.copyWrite}</p>
      <a href="#" aria-label="Scroll to top" className="interact logo">
        <Logo />
      </a>

      <ul>
        {ctx.footer.links.map((obj, index) => (
          <Link style={{ opacity: 1 }} className="interact" key={index} url={obj.url} label={obj.label} attrs={ctx.footer.attrs} />
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
