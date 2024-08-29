import links from "../assets/links.json";

function Footer() {
  const date = new Date().getFullYear

  return (
    <footer>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.url} aria-label={link.label}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      © {(new Date().getFullYear())} Atlas School
    </footer>
  );
}

export default Footer;