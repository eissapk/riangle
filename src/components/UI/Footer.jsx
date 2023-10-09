import Link from "../Link";
import Logo from "../Icons/Logo";
import DataContext from "../../Store/data-context";
import { useContext } from "react";

function Footer() {
  const ctx = useContext(DataContext);

  return (
    <footer>
      <a href="#" aria-label="Scroll to top">
        <Logo />
      </a>

      <p>{ctx.footer.copyWrite}</p>

      <ul>
        {ctx.footer.links.map((obj, index) => (
          <Link className="interact" key={index} url={obj.url} label={obj.label} attrs={ctx.footer.attrs} />
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
