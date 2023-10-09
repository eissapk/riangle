export default function Link({ label, url, attrs, className }) {
  return (
    <li>
      <a className={className ? className : ""} href={url} {...attrs}>
        {label}
      </a>
    </li>
  );
}
