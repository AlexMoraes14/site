import logo from "../assets/logo-am.png";

export function Header({ content, language, languages, onLanguageChange }) {
  const { nav, profile } = content;
  const navigationItems = [
    { id: "sobre", label: nav.about },
    { id: "cases", label: nav.cases },
    { id: "servicos", label: nav.services },
    { id: "contato", label: nav.contact },
  ];

  const renderNavigation = (className) => (
    <nav className={className} aria-label={nav.ariaLabel}>
      {navigationItems.map((item) => (
        <a
          href={`#${item.id}`}
          key={item.id}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label={profile.brand}>
          <span className="logo-shell">
            <img src={logo} alt="" />
          </span>
          <span>{profile.brand}</span>
        </a>

        <div className="header-actions">
          {renderNavigation("nav-links")}

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

      {renderNavigation("mobile-nav")}
    </>
  );
}
