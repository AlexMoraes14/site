export function Footer({ content }) {
  return (
    <footer className="site-footer">
      <span>{content.profile.brand}</span>
      <span>{content.footer}</span>
    </footer>
  );
}
