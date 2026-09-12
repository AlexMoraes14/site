import { useEffect, useMemo, useState } from "react";
import { About } from "./components/About";
import { CaseStudies } from "./components/CaseStudies";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { Services } from "./components/Services";
import { TechStack } from "./components/TechStack";
import { languages, portfolio } from "./data/portfolio";

function setMetaContent(selector, content) {
  document.querySelector(selector)?.setAttribute("content", content);
}

export default function App() {
  const [language, setLanguage] = useState(() => {
    if (window.location.pathname.replace(/\/+$/, "") === "/en") {
      return "en";
    }

    return "pt";
  });
  const content = useMemo(() => portfolio[language], [language]);

  useEffect(() => {
    document.documentElement.lang = languages[language].locale;
    document.title = content.metaTitle;
    setMetaContent('meta[name="description"]', content.metaDescription);
    setMetaContent('meta[property="og:title"]', content.metaTitle);
    setMetaContent('meta[property="og:description"]', content.metaDescription);
    setMetaContent(
      'meta[property="og:locale"]',
      languages[language].locale.replace("-", "_"),
    );
    setMetaContent('meta[name="twitter:title"]', content.metaTitle);
    setMetaContent('meta[name="twitter:description"]', content.metaDescription);
  }, [content, language]);

  const handleLanguageChange = (nextLanguage) => {
    if (nextLanguage === language) {
      return;
    }

    window.location.href = nextLanguage === "en" ? "/en/" : "/";
  };

  return (
    <>
      <Header
        content={content}
        language={language}
        languages={languages}
        onLanguageChange={handleLanguageChange}
      />
      <main>
        <Hero content={content} />
        <Metrics content={content} />
        <About content={content} />
        <CaseStudies content={content} />
        <Services content={content} />
        <TechStack content={content} />
        <ContactCTA content={content} />
      </main>
      <Footer content={content} />
    </>
  );
}
