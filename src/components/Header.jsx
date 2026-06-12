import logo from "../assets/logo-am.svg";

export function Header({ content, language, languages, onLanguageChange }) {
  const { nav, profile } = content;

  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label={profile.brand}>
        <span className="logo-shell">
          <img src={logo} alt="" />
        </span>
        <span>{profile.brand}</span>
      </a>

      <div className="header-actions">
        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#sobre">{nav.about}</a>
          <a href="#cases">{nav.cases}</a>
          <a href="#servicos">{nav.services}</a>
          <a href="#contato">{nav.contact}</a>
        </nav>

        <div className="language-switcher" aria-label="Selecionar idioma">
          {Object.entries(languages).map(([key, item]) => (
            <button
              className={key === language ? "is-active" : ""}
              key={key}
              onClick={() => onLanguageChange(key)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
