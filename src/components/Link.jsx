import styles from "./Link.module.css";
export default function Link({ label, url, attrs, className }) {
  const classes = `${className ? className : ""} ${styles.link}`;
  return (
    <li>
      <a className={classes} href={url} {...attrs}>
        {label ? label : ""}
      </a>
    </li>
  );
}
